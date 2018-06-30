import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from './ContainerClass';
import {WorkspaceClass} from '../WorkspaceClass';
import {ResizersClass} from './resizer/ResizersClass';
import {ResizerType} from './resizer/ResizerType';
import {ResizerClass} from './resizer/ResizserClass';

export class ElementClass implements IElement {

  public resizers: ResizersClass;
  figure: IElement;
  container: ContainerClass;
  rotates: RotatesClass;

  $element: any;

  protected _selected: boolean = false;

  constructor(public workspace: WorkspaceClass, figure: IElement) {

    this.container = new ContainerClass({width: 0, height: 0});
    this.$element = this.container.$element;
    this.container._parent = this;
    this.figure = figure;
    this.figure.parent(this.container);
    this.resizers = new ResizersClass(this.figure, [
      ResizerType.LT,
      ResizerType.T,
      ResizerType.RT,
      ResizerType.R,
      ResizerType.RB,
      ResizerType.B,
      ResizerType.LB,
      ResizerType.L
    ]);
    this.resizers.resizers.forEach(f => this.container.$element.appendChild(f.$element));
    this.rotates = new RotatesClass(this.figure);
    this.rotates.rotates.forEach(f => this.container.$element.appendChild(f.$element));
    this.addEvents();
    this.selected = false;
  }

  private shiftX = 0;
  private shiftY = 0;

  addEvents() {
    const bindMoveHandler = this.moveFigureHandler.bind(this);

    this.figure.$element.addEventListener('mousedown', (e) => {
      this.shiftX = e.offsetX - this.container.x;
      this.shiftY = e.offsetY - this.container.y;
      this.workspace.$element.addEventListener('mousemove', bindMoveHandler, true);

      this.workspace.$element.addEventListener('mouseup', () => {
        this.workspace.$element.removeEventListener('mousemove', bindMoveHandler, true);
        this.shiftX = 0;
        this.shiftY = 0;
      });
    });

    this.resizers.resizers.forEach(f => {
      f.$element.addEventListener('mousedown', (e) => {
        const moveResizerHandlerBind = (ev) => {
          this.moveResizerHandler(ev, f);
        };
        this.workspace.$element.addEventListener('mousemove', moveResizerHandlerBind, true);
        this.workspace.$element.addEventListener('mouseup', () => {
          this.workspace.$element.removeEventListener('mousemove', moveResizerHandlerBind, true);
        });
      });
    });

    this.rotates.rotates.forEach(f => {
      f.$element.addEventListener('mousedown', (e) => {
        this.shiftX = e.offsetX;
        this.shiftY = e.offsetY;
        const moveHandlerBind = (ev) => {
          this.moveRotateHandler(ev, f);
        };
        this.workspace.$element.addEventListener('mousemove', moveHandlerBind, true);
        this.workspace.$element.addEventListener('mouseup', () => {
          this.workspace.$element.removeEventListener('mousemove', moveHandlerBind, true);
          this.shiftX = 0;
          this.shiftY = 0;
        });
      });
    });

  }

  moveFigureHandler(e: MouseEvent) {
    const nx = e.offsetX - this.shiftX;
    const ny = e.offsetY - this.shiftY;
    this.container.x = nx;
    this.container.y = ny;
    this.resizers.positionConnectors();
  }

  moveResizerHandler(e: MouseEvent, resizer: ResizerClass) {
    const newWR = e.offsetX - this.container.x - this.figure.x - resizer.size / 2;
    const newHB = e.offsetY - this.container.y - this.figure.y - resizer.size / 2;

    const shiftL = this.container.x + resizer.size / 2 - e.offsetX;
    const shiftY = this.container.y + resizer.size / 2 - e.offsetY;
    const newWL = this.figure.width + shiftL;
    const newWXL = this.container.x - shiftL;
    const newHT = this.figure.height + shiftY;
    const newHYT = this.container.y - shiftY;


    switch (resizer.type) {
      case ResizerType.LT:
        this.figure.height = newHT;
        this.container.y = newHYT;
        this.figure.width = newWL;
        this.container.x = newWXL;
        break;
      case ResizerType.T:
        this.figure.height = newHT;
        this.container.y = newHYT;
        break;
      case ResizerType.RT:
        this.figure.width = newWR;
        this.figure.height = newHT;
        this.container.y = newHYT;
        break;
      case ResizerType.R:
        this.figure.width = newWR;
        break;
      case ResizerType.RB:
        this.figure.width = newWR;
        this.figure.height = newHB;
        break;
      case ResizerType.B:
        this.figure.height = newHB;
        break;
      case ResizerType.LB:
        this.figure.width = newWL;
        this.container.x = newWXL;
        this.figure.height = newHB;
        break;
      case ResizerType.L:
        this.figure.width = newWL;
        this.container.x = newWXL;
        break;
    }
    this.figure.position();
    this.resizers.reposition();
    this.resizers.positionConnectors();
    this.rotates.reposition();
  }


  moveRotateHandler(e: MouseEvent, rotate: RotateClass) {
    const moveX = e.offsetX - this.shiftX;
    const moveY = e.offsetY - this.shiftY;
    this.container.rotate(Math.round((moveX / 100) * 180), 0, 0);
  }

  set selected(val: boolean) {
    this._selected = val;
    this.resizers.selected = val;
    this.rotates.selected = val;
    this.figure.selected = val;
  }

  get selected(): boolean {
    return this._selected;
  }

  reposition() {
    this.figure.position();
    this.resizers.reposition();
    this.rotates.reposition();
  }

}

class RotatesClass {
  rotates: RotateClass[] = [];

  _selected: boolean;

  constructor(public parent: IElement) {
    for (const t of Object.keys(RotateType)) {
      if (!isNaN(+t)) {
        const res = new RotateClass(parent, +t);
        this.rotates.push(res);
      }
    }
    this.selected = false;
  }

  public reposition() {
    this.rotates.forEach(f => f.position());
  }

  set selected(val: boolean) {
    this._selected = val;
    this.rotates.forEach(f => f.selected = this._selected);
  }

  get selected(): boolean {
    return this._selected;
  }
}

class RotateClass {
  $element: SVGRectElement;
  size = 8;
  _selected: boolean;

  constructor(public parent: IElement, public type: RotateType) {
    this.$element = this.createElement();
  }

  createElement(): SVGRectElement {
    const $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    $rect.setAttribute('width', this.size + '');
    $rect.setAttribute('height', this.size + '');
    $rect.setAttribute('fill', 'orange');
    $rect.setAttribute('stroke', 'blue');
    $rect.setAttribute('stroke-width', '1');
    $rect.setAttribute('rx', '1');
    $rect.setAttribute('ry', '1');
    $rect.style.cursor = 'alias';
    return $rect;
  }

  position() {
    if (this.type === RotateType.left) {
      this.$element.setAttribute('x', '-20');
      this.$element.setAttribute('y', ((this.parent.height + this.size) / 2) + '');
    }
    if (this.type === RotateType.right) {
      this.$element.setAttribute('x', ((this.parent.width + 29)) + '');
      this.$element.setAttribute('y', ((this.parent.height + this.size) / 2) + '');
    }
  }

  set selected(val: boolean) {
    this._selected = val;
    if (this._selected) {
      this.$element.style.display = 'none';
    } else {
      this.$element.style.display = 'none';
    }
  }

  get selected(): boolean {
    return this._selected;
  }
}

enum RotateType {
  left, right
}
