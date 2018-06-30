import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from './ContainerClass';

export class ElementClass {

  figure: IElement;
  container: ContainerClass;
  resizers: ResizersClass;

  _selected: boolean = false;

  constructor(public $parent: SVGSVGElement, figure: IElement) {

    this.container = new ContainerClass({width: 0, height: 0});
    this.figure = figure;
    this.figure.parent = this.container;
    this.resizers = new ResizersClass(this.figure);
    this.resizers.resizers.forEach(f => this.container.$element.appendChild(f.$element));
    this.addEvents();
  }

  private shiftX = 0;
  private shiftY = 0;

  addEvents() {
    const bindMoveHandler = this.moveFigureHandler.bind(this);

    this.figure.$element.addEventListener('mousedown', (e) => {
      this.selected = true;
      this.shiftX = e.offsetX - this.container.x;
      this.shiftY = e.offsetY - this.container.y;
      this.$parent.addEventListener('mousemove', bindMoveHandler, true);

      this.$parent.addEventListener('mouseup', () => {
        this.$parent.removeEventListener('mousemove', bindMoveHandler, true);
        this.shiftX = 0;
        this.shiftY = 0;
      });
    });

    this.resizers.resizers.forEach(f => {
      f.$element.addEventListener('mousedown', (e) => {
        const moveResizerHandlerBind = (ev) => {
          this.moveResizerHandler(ev, f);
        };
        this.$parent.addEventListener('mousemove', moveResizerHandlerBind, true);
        this.$parent.addEventListener('mouseup', () => {
          this.$parent.removeEventListener('mousemove', moveResizerHandlerBind, true);
        });
      });
    });

  }

  moveFigureHandler(e: MouseEvent) {
    const nx = e.offsetX - this.shiftX;
    const ny = e.offsetY - this.shiftY;
    this.container.x = nx;
    this.container.y = ny;
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
    this.resizers.reposition();
  }

  set selected(val: boolean) {
    this._selected = val;
    this.resizers.selected = val;
    this.figure.selected = val;
  }

  get selected(): boolean {
    return this._selected;
  }
}


class ResizersClass {
  resizers: ResizerClass[] = [];

  _selected: boolean;

  constructor(public parent: IElement) {
    for (const t of Object.keys(ResizerType)) {
      if (!isNaN(+t)) {
        const res = new ResizerClass(parent, +t);
        this.resizers.push(res);
      }
    }
    this.selected = false;
  }

  public reposition() {
    this.resizers.forEach(f => f.position());
  }

  set selected(val: boolean) {
    this._selected = val;
    if (this._selected) {
      this.resizers.forEach(f => f.show());
    } else {
      this.resizers.forEach(f => f.hide());
    }
  }

  get selected(): boolean {
    return this._selected;
  }
}

class ResizerClass {
  public $element: SVGRectElement;
  size = 8;

  constructor(public parent: IElement, public type: ResizerType) {
    this.$element = this.createElement();
    this.position();
    this.setCursor();
  }

  createElement() {
    const resizer = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    resizer.setAttribute('width', this.size + '');
    resizer.setAttribute('height', this.size + '');
    resizer.setAttribute('stroke', 'blue');
    resizer.setAttribute('stroke-width', '1');
    resizer.setAttribute('fill', '#F0F0F0');
    resizer.setAttribute('rx', '0');
    resizer.setAttribute('ry', '0');
    return resizer;
  }

  position() {
    switch (this.type) {
      case ResizerType.LT:
        this.$element.setAttribute('x', '0');
        this.$element.setAttribute('y', '0');
        break;
      case ResizerType.T:
        this.$element.setAttribute('x', ((this.parentWidth + this.size) / 2) + '');
        this.$element.setAttribute('y', '-1');
        break;
      case ResizerType.RT:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
        this.$element.setAttribute('y', '0');
        break;
      case ResizerType.R:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 3) + '');
        this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
        break;
      case ResizerType.RB:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
        break;
      case ResizerType.B:
        this.$element.setAttribute('x', ((this.parentWidth + this.size) / 2) + '');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 3) + '');
        break;
      case ResizerType.LB:
        this.$element.setAttribute('x', '0');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
        break;
      case ResizerType.L:
        this.$element.setAttribute('x', '-1');
        this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
        break;
    }
  }

  setCursor() {
    switch (this.type) {
      case ResizerType.LT:
      case ResizerType.RB:
        this.$element.style.cursor = 'nwse-resize';
        break;
      case ResizerType.RT:
      case ResizerType.LB:
        this.$element.style.cursor = 'nesw-resize';
        break;
      case ResizerType.R:
      case ResizerType.L:
        this.$element.style.cursor = 'e-resize';
        break;
      case ResizerType.B:
      case ResizerType.T:
        this.$element.style.cursor = 'n-resize';
        break;
    }
  }

  show() {
    this.$element.style.display = 'block';
  }

  hide() {
    this.$element.style.display = 'none';
  }

  get parentWidth(): number {
    return +this.parent.$element.getAttribute('width');
  }

  get parentHeight(): number {
    return +this.parent.$element.getAttribute('height');
  }

}

enum ResizerType {
  LT,
  T,
  RT,
  R,
  RB,
  B,
  LB,
  L
}
