import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from './ContainerClass';

export class ElementClass {

  figure: IElement;
  container: ContainerClass;
  resizers: ResizersClass;

  _selected: boolean = false;

  constructor(parent: SVGSVGElement, figure: IElement) {

    this.container = new ContainerClass(figure.width + 18, figure.height + 18);
    this.figure = figure;
    this.figure.parent = this.container;
    this.resizers = new ResizersClass(this.container.$element);

    this.selected = true;
  }

  addEvents;

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

  constructor(public parent: SVGSVGElement) {
    for (const t of Object.keys(ResizerType)) {
      if (!isNaN(+t)) {
        const res = new ResizerClass(parent, +t);
        parent.appendChild(res.$element);
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

  constructor(public parent: SVGSVGElement, public type: ResizerType) {
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
    resizer.setAttribute('rx', '2');
    resizer.setAttribute('ry', '2');
    return resizer;
  }

  position() {
    switch (this.type) {
      case ResizerType.LT:
        this.$element.setAttribute('x', '1');
        this.$element.setAttribute('y', '1');
        break;
      case ResizerType.T:
        this.$element.setAttribute('x', ((this.parentWidth - this.size - 1) / 2) + '');
        this.$element.setAttribute('y', '1');
        break;
      case ResizerType.RT:
        this.$element.setAttribute('x', (this.parentWidth - this.size - 1) + '');
        this.$element.setAttribute('y', '1');
        break;
      case ResizerType.R:
        this.$element.setAttribute('x', (this.parentWidth - this.size - 1) + '');
        this.$element.setAttribute('y', ((this.parentHeight - this.size - 1) / 2) + '');
        break;
      case ResizerType.RB:
        this.$element.setAttribute('x', (this.parentWidth - this.size - 1) + '');
        this.$element.setAttribute('y', (this.parentHeight - this.size - 1) + '');
        break;
      case ResizerType.B:
        this.$element.setAttribute('x', ((this.parentWidth - this.size - 1) / 2) + '');
        this.$element.setAttribute('y', (this.parentHeight - this.size - 1) + '');
        break;
      case ResizerType.LB:
        this.$element.setAttribute('x', '1');
        this.$element.setAttribute('y', (this.parentHeight - this.size - 1) + '');
        break;
      case ResizerType.L:
        this.$element.setAttribute('x', '1');
        this.$element.setAttribute('y', ((this.parentHeight - this.size - 1) / 2) + '');
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
    return +this.parent.getAttribute('width');
  }

  get parentHeight(): number {
    return +this.parent.getAttribute('height');
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
