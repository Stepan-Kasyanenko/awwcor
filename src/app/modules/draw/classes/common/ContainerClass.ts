import {ICoord} from '../../interfaces/ICoord';
import {IElement} from '../../interfaces/IElement';
import {ElementClass} from './ElementClass';

export class ContainerClass implements IElement {
  $element: SVGSVGElement;
  _x: number;
  _y: number;
  selected: boolean;
  _parent: ElementClass;

  constructor(options: ICoord = {}) {
    this.$element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.$element.style.overflow = 'visible';
    this._x = options.x || 0;
    this._y = options.y || 0;
    this.width = options.width ;
    this.height = options.height;
  }

  parent(val: ContainerClass) {
  }

  position() {

  }

  get width(): number {
    return +this.$element.getBoundingClientRect().width;
  }

  set width(val: number) {
    if(val)
      this.$element.setAttribute('width', Math.max(val, 5) + '');
  }

  get height(): number {
    return +this.$element.getBoundingClientRect().height;
  }

  set height(val: number) {
    if(val)
      this.$element.setAttribute('height', Math.max(val, 5) + '');
  }

  get x(): number {
    return this._x;
  }

  set x(v: number) {
    this._x = v;
    this.$element.setAttribute('x', this._x + '');
  }

  get y(): number {
    return this._y;
  }

  set y(v: number) {
    this._y = v;
    this.$element.setAttribute('y', this._y + '');
  }

  rotate(angle, x, y) {
    this.$element.setAttribute('transform', `rotate(${angle} ${x} ${y})`);
  }

}
