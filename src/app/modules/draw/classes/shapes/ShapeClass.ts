import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from '../common/ContainerClass';
import {ICoord} from '../../interfaces/ICoord';

export abstract class ShapeClass implements IElement {
  public $element: SVGRectElement;
  public _parent: ContainerClass;
  public minSize: number = 5;
  _selected: boolean;
  _width: number;
  _height: number;

  constructor(options: ICoord = {}) {
    this._width = options.width || 30;
    this._height = options.height || 30;
  }

  abstract createElement(): SVGRectElement;

  position() {
    this.$element.setAttribute('x', '9');
    this.$element.setAttribute('y', '9');
  }

  public parent(val: ContainerClass) {
    this._parent = val;
    this._parent.$element.appendChild(this.$element);
  }

  set selected(val: boolean) {
    this._selected = val;
  }

  get selected(): boolean {
    return this._selected;
  }

  protected setCursor() {
    this.$element.style.cursor = 'move';
  }

  get width(): number {
    return this._width;
  }

  set width(val: number) {
    this._width = Math.max(val, this.minSize);
    this.$element.setAttribute('width', this._width + '');
  }

  get height(): number {
    return this._height;
  }

  set height(val: number) {
    this._height = Math.max(val, this.minSize);
    this.$element.setAttribute('height', this._height + '');
  }

  get x(): number {
    return +this.$element.getAttribute('x') || 0;
  }

  get y(): number {
    return +this.$element.getAttribute('y') || 0;
  }
}
