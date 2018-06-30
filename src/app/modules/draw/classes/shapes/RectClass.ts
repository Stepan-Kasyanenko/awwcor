import {ICoord} from '../../interfaces/ICoord';
import {ShapeClass} from './ShapeClass';

export class RectClass extends ShapeClass {

  constructor(options: ICoord = {}) {
    super(options);
    this.$element = this.createElement();
    this.setCursor();
    this.createText(12);
    this.textContent = 'Rectangle line2';
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

}
