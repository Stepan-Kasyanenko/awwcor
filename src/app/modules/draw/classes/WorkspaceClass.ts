import {ElementClass} from './common/ElementClass';

export class WorkspaceClass {
  elements: ElementClass[] = [];
  selectedEl: ElementClass;

  constructor(public $element: SVGSVGElement) {

    this.addEvents();
  }

  addEvents() {
    this.$element.addEventListener('mousedown', (e) => {
      if (e.target === this.$element) {
        this.removeSelected();
      } else {
        console.log(e);
        const element = this.elements.find(f => f.figure.$element === e.target || f.container.$element === e.target.parentElement);
        console.log('element', element);
        this.setSelected(element);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        this.remove();
      }
    });
  }

  removeSelected() {
    if (this.selectedEl) {
      this.selectedEl.selected = false;
      this.selectedEl = null;
    }
  }

  setSelected(element: ElementClass) {
    if (element) {
      this.removeSelected();
      this.selectedEl = element;
      this.selectedEl.selected = true;
    }
  }

  add(element: ElementClass) {
    this.$element.appendChild(element.container.$element);
    this.elements.push(element);
    element.reposition();
  }

  remove() {
    if (!this.selectedEl)
      return;
    this.$element.removeChild(this.selectedEl.container.$element);
    this.elements.splice(this.elements.indexOf(this.selectedEl), 1);
    this.selectedEl.selected = false;
    this.selectedEl = null;
  }
}
