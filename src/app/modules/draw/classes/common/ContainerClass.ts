export class ContainerClass {
  $element: SVGSVGElement;

  constructor(width: number, height: number) {
    this.$element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    this.$element.setAttribute('width', width + '');
    this.$element.setAttribute('height', height + '');
  }

}
