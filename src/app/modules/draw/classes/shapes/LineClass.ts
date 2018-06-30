import {ICoord} from '../../interfaces/ICoord';
import {ShapeClass} from './ShapeClass';
import {ContainerClass} from '../common/ContainerClass';

export class LineClass extends ShapeClass {

  $elementTriangle: SVGPolygonElement;

  constructor(options: ICoord = {}) {
    super(options);
    this.$element = this.createElement();
    this.$elementTriangle = this.createElementTriangle();
    this.setCursor();
  }

  createElement(): SVGRectElement {
    const $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    $rect.setAttribute('width', this.width + '');
    $rect.setAttribute('height', this.height + '');
    $rect.setAttribute('fill', 'gray');
    $rect.setAttribute('rx', '0');
    $rect.setAttribute('ry', '0');
    return $rect;
  }

  createElementTriangle(): SVGPolygonElement {
    const $rect = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    $rect.setAttribute('fill', 'gray');
    return $rect;
  }

  position() {
    super.position();
    const p1 = [this.width + this.x, -6 + this.y].join(',');
    const p2 = [this.width + this.height + this.x, this.height / 2 + this.y].join(',');
    const p3 = [this.width + this.x, this.height + 6 + this.y].join(',');
    this.$elementTriangle.setAttribute('points', [p1, p2, p3].join(','));
  }

  public parent(val: ContainerClass) {
    super.parent(val);
    this._parent.$element.appendChild(this.$elementTriangle);
  }
}
