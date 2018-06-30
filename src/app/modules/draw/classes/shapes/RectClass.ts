import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from '../common/ContainerClass';

export class RectClass implements IElement {
  public $element: SVGRectElement;
  public _parent: ContainerClass;
  _selected: boolean;

  constructor(public width: number, public height: number) {
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
    $rect.setAttribute('rx', '4');
    $rect.setAttribute('ry', '4');
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
}
