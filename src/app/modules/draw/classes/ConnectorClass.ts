import {ICoord} from '../interfaces/ICoord';
import {WorkspaceClass} from './WorkspaceClass';
import {ResizersClass} from './common/resizer/ResizersClass';
import {ResizerType} from './common/resizer/ResizerType';
import {ResizerClass} from './common/resizer/ResizserClass';

export class ConnectorClass {
  public $element: SVGLineElement;
  public minLength: number = 15;
  _selected: boolean;
  resizers: ResizersClass;

  onMove: Function;

  workX: number = 0;
  workY: number = 0;

  constructor(public workspace: WorkspaceClass, public p1: ICoord = {x: 5, y: 20}, public  p2: ICoord = {x: 100, y: 20}) {
    this.$element = this.createElement();
    this.resizers = new ResizersClass(this, [
      ResizerType.L,
      ResizerType.R
    ]);
    this.resizers.resizers.forEach(f => this.workspace.$element.appendChild(f.$element));
    this.reposition();
    this.setCursor();
    this.addEvents();
    const rect = this.workspace.$element.getBoundingClientRect();
    this.workX = rect.left;
    this.workY = rect.top;
  }

  createElement(): SVGLineElement {
    const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    $line.setAttribute('stroke', 'gray');
    $line.setAttribute('stroke-width', '3');
    return $line;
  }

  //
  //
  // createElement(): SVGLineElement {
  //   const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //   $line.setAttribute('stroke', 'gray');
  //   $line.setAttribute('stroke-width', '3');
  //   return $line;
  // }

  private shiftX = 0;
  private shiftY = 0;

  addEvents() {
    const bindMoveHandler = this.moveFigureHandler.bind(this);

    this.$element.addEventListener('mousedown', (e) => {
      this.shiftX = e.pageX - this.workX - this.p1.x;
      this.shiftY = e.pageY - this.workY - this.p1.y;
      this.workspace.$element.addEventListener('mousemove', bindMoveHandler, true);
    });

    this.workspace.$element.addEventListener('mouseup', () => {
      this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
      this.shiftX = 0;
      this.shiftY = 0;
    });

    this.workspace.$element.addEventListener('mouseleave', () => {
      this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
      this.shiftX = 0;
      this.shiftY = 0;
    });

    this.resizers.resizers.forEach(f => {
      const moveResizerHandlerBind = (ev) => {
        this.moveResizerHandler(ev, f);
      };
      f.$element.addEventListener('mousedown', (e) => {
        this.workspace.$element.addEventListener('mousemove', moveResizerHandlerBind, true);
      });
      this.workspace.$element.addEventListener('mouseup', () => {
        this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
      });
      this.workspace.$element.addEventListener('mouseleave', () => {
        this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
      });
    });
  }


  moveFigureHandler(e: MouseEvent) {
    const offsetX = e.pageX - this.workX;
    const offsetY = e.pageY - this.workY;
    const nx1 = offsetX - this.shiftX;
    const ny1 = offsetY - this.shiftY;
    const nx2 = offsetX + (this.p2.x - this.p1.x) - this.shiftX;
    const ny2 = offsetY + (this.p2.y - this.p1.y) - this.shiftY;

    this.p1.x = nx1;
    this.p1.y = ny1;
    this.p2.x = nx2;
    this.p2.y = ny2;
    if (this.onMove) {
      const rect = this.workspace.$element.getBoundingClientRect();
      this.onMove({pageX: this.p1.x + rect.left, pageY: this.p1.y + rect.top}, ResizerType.L, false);
      this.onMove({pageX: this.p2.x + rect.left, pageY: this.p2.y + rect.top}, ResizerType.R, false);
    }
    this.reposition();
  }

  moveResizerHandler(e: MouseEvent, resizer: ResizerClass) {
    const nx = e.pageX - this.workX + resizer.size / 2;
    const ny = e.pageY - this.workY + resizer.size / 2;
    if (resizer.type === ResizerType.L) {
      this.setLeftPoint(nx, ny);
    }
    if (resizer.type === ResizerType.R) {
      this.setRightPoint(nx, ny);
    }

    if (this.onMove)
      this.onMove({pageX: e.pageX, pageY: e.pageY}, resizer.type,true);
    this.reposition();
  }

  setLeftPoint(x, y, isPage?) {
    const distance = Math.sqrt(Math.pow(x - this.p2.x, 2) + Math.pow(y - this.p2.y, 2));
    if (distance < this.minLength)
      return;
    if (isPage) {
      const rect = this.workspace.$element.getBoundingClientRect();
      x = x - rect.left;
      y = y - rect.top;
    }
    this.p1.x = x;
    this.p1.y = y;
  }

  setRightPoint(x, y, isPage?) {
    const distance = Math.sqrt(Math.pow(x - this.p1.x, 2) + Math.pow(y - this.p2.y, 2));
    if (distance < this.minLength)
      return;
    if (isPage) {
      const rect = this.workspace.$element.getBoundingClientRect();
      x = x - rect.left;
      y = y - rect.top;
    }
    this.p2.x = x;
    this.p2.y = y;
  }

  reposition() {
    this.$element.setAttribute('x1', this.p1.x + '');
    this.$element.setAttribute('y1', this.p1.y + '');
    this.$element.setAttribute('x2', this.p2.x + '');
    this.$element.setAttribute('y2', this.p2.y + '');
    this.leftPosition();
    this.rightPosition();
  }

  leftPosition() {
    const resizer = this.resizers.resizers[0];
    resizer.$element.setAttribute('x', (this.p1.x - resizer.size / 2) + '');
    resizer.$element.setAttribute('y', (this.p1.y - resizer.size / 2) + '');
  }

  rightPosition() {
    const resizer = this.resizers.resizers[1];
    resizer.$element.setAttribute('x', (this.p2.x - resizer.size / 2) + '');
    resizer.$element.setAttribute('y', (this.p2.y - resizer.size / 2) + '');
  }

  set selected(val: boolean) {
    this._selected = val;
    this.resizers.selected = val;
  }

  get selected(): boolean {
    return this._selected;
  }

  protected setCursor() {
    this.$element.style.cursor = 'move';
  }
}
