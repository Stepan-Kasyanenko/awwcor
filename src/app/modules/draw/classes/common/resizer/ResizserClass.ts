import {IElement} from '../../../interfaces/IElement';
import {ResizerType} from './ResizerType';
import {ConnectorClass} from '../../ConnectorClass';

export class ResizerClass {
  public $element: SVGRectElement;
  public size = 8;

  connectors: { connector: ConnectorClass, type: ResizerType }[] = [];

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
    resizer.setAttribute('fill', 'transparent');
    resizer.setAttribute('rx', '2');
    resizer.setAttribute('ry', '2');
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
        this.$element.setAttribute('y', '0');
        break;
      case ResizerType.RT:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
        this.$element.setAttribute('y', '0');
        break;
      case ResizerType.R:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
        this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
        break;
      case ResizerType.RB:
        this.$element.setAttribute('x', (this.parentWidth + this.size + 2) + '');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
        break;
      case ResizerType.B:
        this.$element.setAttribute('x', ((this.parentWidth + this.size) / 2) + '');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
        break;
      case ResizerType.LB:
        this.$element.setAttribute('x', '0');
        this.$element.setAttribute('y', (this.parentHeight + this.size + 2) + '');
        break;
      case ResizerType.L:
        this.$element.setAttribute('x', '0');
        this.$element.setAttribute('y', ((this.parentHeight + this.size) / 2) + '');
        break;
    }

  }

  addConnector(connector: ConnectorClass, type: ResizerType) {
    if (this.connectors.some(s => s.connector === connector)) {
      return;
    }
    this.connectors.push({connector: connector, type});
  }

  positionConnectors() {
    for (const con of this.connectors) {
      if (con.type === ResizerType.L)
        con.connector.setLeftPoint(this.x + this.parentX + this.size / 2, this.y + this.parentY + this.size / 2);
      if (con.type === ResizerType.R)
        con.connector.setRightPoint(this.x + this.parentX + this.size / 2, this.y + this.parentY + this.size / 2);
      con.connector.reposition();
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
    this.$element.style.opacity = '1';
    this.$element.style.pointerEvents = 'auto';
  }

  hide() {
    this.$element.style.pointerEvents = 'none';
    this.$element.style.opacity = '0';
  }

  get parentX(): number {
    return +this.parent._parent.$element.getAttribute('x');
  }

  get parentY(): number {
    return +this.parent._parent.$element.getAttribute('y');
  }

  get parentWidth(): number {
    return +this.parent.$element.getBoundingClientRect().width;
  }

  get parentHeight(): number {
    return +this.parent.$element.getBoundingClientRect().height;
  }

  get x(): number {
    return +this.$element.getAttribute('x');
  }

  get y(): number {
    return +this.$element.getAttribute('y');
  }

  get pageX(): number {
    return +this.$element.getBoundingClientRect().left;
  }

  get pageY(): number {
    return +this.$element.getBoundingClientRect().top;
  }

}
