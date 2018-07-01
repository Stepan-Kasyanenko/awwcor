import {IElement} from '../../interfaces/IElement';
import {ContainerClass} from '../common/ContainerClass';
import {ICoord} from '../../interfaces/ICoord';

export class ShapeClass implements IElement {
  public $element: SVGRectElement;
  public _parent: ContainerClass;
  public minSize: number = 40;
  _selected: boolean;
  _width: number;
  _height: number;

  private _textContent: string = '';
  private cntSpans: number = 0;
  private textShiftX: number = 0;

  public $textContainer: SVGSVGElement;
  public $text: SVGTextElement;
  public $title: SVGTitleElement;

  constructor(options: ICoord = {}) {
    this._width = options.width || 30;
    this._height = options.height || 30;
  }

  createElement(): SVGRectElement {
    return null;
  }

  position() {
    this.$element.setAttribute('x', '9');
    this.$element.setAttribute('y', '9');
    this.positionText();
  }

  public createText(x) {
    this.textShiftX = x;
    const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const $helpTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    $helpTitle.textContent = 'Double click to change';
    $svg.appendChild($helpTitle);
    const $text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    this.$title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    $text.setAttribute('y', '15');
    $svg.setAttribute('x', x);
    $svg.setAttribute('y', '10');
    $svg.appendChild($text);
    $svg.style.overflow = 'hidden';
    $text.style.userSelect = 'none';
    $svg.style.cursor = 'text';
    this.$textContainer = $svg;
    this.$text = $text;
    this.$text.addEventListener('dblclick', () => {
      this.textContent = prompt('Enter text', this.textContent) || '';
    });
  }

  set textContent(val: string) {
    this._textContent = val;
    this.$title.textContent = val;
    this.splitText();
    this.positionText();
  }

  get textContent(): string {
    return this._textContent;
  }

  splitText() {
    if (!this.$text)
      return;
    const textLines = this.textContent;
    this.$text.innerHTML = '';
    let y = 14;
    this.cntSpans = 1;
    let tSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    tSpan.setAttribute('y', y + '');
    tSpan.setAttribute('x', '0');
    this.$text.appendChild(tSpan);
    const width = this.width - 12;
    let lastIndex = 0;
    for (let i = 0; i < textLines.length; i++) {
      tSpan.textContent += textLines[i];
      if (this.$text.getBoundingClientRect().width > width) {
        this.cntSpans++;
        i -= 2;
        if (lastIndex === i)
          break;
        lastIndex = i;
        tSpan.textContent = tSpan.textContent.slice(0, tSpan.textContent.length - 2);
        tSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        y += 14;
        tSpan.setAttribute('y', y + '');
        tSpan.setAttribute('x', '0');
        this.$text.appendChild(tSpan);
      }
    }
  }

  positionText() {
    if (!this.$text)
      return;
    this.splitText();
    const placeholderX = (this.width - this.$text.getBoundingClientRect().width) / 2;
    const placeholderY = (this.height - this.$text.getBoundingClientRect().height) / 2;
    if (placeholderX > 0 || placeholderY > 0) {
      this.$textContainer.setAttribute('x', Math.max(placeholderX, this.textShiftX) + '');
      this.$textContainer.setAttribute('y', Math.max(placeholderY, 10) + '');
    } else {
      this.$textContainer.setAttribute('x', this.textShiftX + '');
      this.$textContainer.setAttribute('y', 10 + '');
    }
    this.$textContainer.setAttribute('width', (this.width - 12) + '');
    this.$textContainer.setAttribute('height', (this.height - 12) + '');
  }

  public parent(val: ContainerClass) {
    this._parent = val;
    this._parent.$element.appendChild(this.$element);
    if (this.$textContainer)
      this._parent.$element.appendChild(this.$textContainer);
    if (this.$title)
      this._parent.$element.appendChild(this.$title);
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
