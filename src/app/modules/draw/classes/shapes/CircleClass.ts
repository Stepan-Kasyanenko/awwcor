import {ICoord} from '../../interfaces/ICoord';
import {ShapeClass} from './ShapeClass';

export class CircleClass extends ShapeClass {

  constructor(options: ICoord = {}) {
    super(options);
    this.$element = this.createElement();
    this.setCursor();
  }

  createElement(): SVGRectElement {
    const $rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    $rect.setAttribute('width', this.width + '');
    $rect.setAttribute('height', this.height + '');
    $rect.setAttribute('stroke', 'red');
    $rect.setAttribute('fill', 'transparent');
    $rect.setAttribute('stroke-width', '2');
    $rect.setAttribute('rx', '50%');
    $rect.setAttribute('ry', '50%');
    return $rect;
  }
}
