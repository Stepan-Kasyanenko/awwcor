import {ICoord} from '../../interfaces/ICoord';

export class ContainerClass {
  $element: SVGSVGElement;
  _x: number;
  _y: number;

  constructor(options: ICoord = {}) {
    this._x = options.x || 0;
    this._y = options.y || 0;
    this.$element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.$element.style.overflow = 'visible';
  }


  get width(): number {
    return +this.$element.getBoundingClientRect().width;
  }

  set width(val: number) {
    this.$element.setAttribute('width', Math.max(val, 5) + '');
  }

  get height(): number {
    return +this.$element.getBoundingClientRect().height;
  }

  set height(val: number) {
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

}
