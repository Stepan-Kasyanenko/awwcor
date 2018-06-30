import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from '../common/ContainerClass';
import {ICoord} from '../../interfaces/ICoord';

export class RectClass implements IElement {
  public $element: SVGRectElement;
  public _parent: ContainerClass;
  _selected: boolean;
  _width: number;
  _height: number;

  constructor(options: ICoord = {}) {
    this._width = options.width || 30;
    this._height = options.height || 30;
    this.$element = this.createElement();
    this.setCursor();
  }

  createElement(): SVGRectElement {
    const $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    $rect.setAttribute('width', this.width + '');
    $rect.setAttribute('height', this.height + '');
    $rect.setAttribute('stroke', '#e37233');
    $rect.setAttribute('fill', 'transparent');
    $rect.setAttribute('stroke-width', '4');
    $rect.setAttribute('rx', '0');
    $rect.setAttribute('ry', '0');
    return $rect;
  }

  position() {
    this.$element.setAttribute('x', '9');
    this.$element.setAttribute('y', '9');
  }

  set parent(val: ContainerClass) {
    this._parent = val;
    this._parent.$element.appendChild(this.$element);
    this.position();
  }

  get parent(): ContainerClass {
    return this._parent;
  }

  set selected(val: boolean) {
    this._selected = val;
  }

  get selected(): boolean {
    return this._selected;
  }

  private setCursor() {
    this.$element.style.cursor = 'move';
  }

  get width(): number {
    return this._width;
  }

  set width(val: number) {
    this._width = Math.max(val, 5);
    this.$element.setAttribute('width', this._width + '');
  }

  get height(): number {
    return this._height;
  }

  set height(val: number) {
    this._height = Math.max(val, 5);
    this.$element.setAttribute('height', this._height + '');
  }

  get x(): number {
    return +this.$element.getAttribute('x') || 0;
  }

  get y(): number {
    return +this.$element.getAttribute('y') || 0;
  }
}
