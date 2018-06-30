import {ElementClass} from './common/ElementClass';
import {IElement} from '../interfaces/IElement';
import {ConnectorClass} from './ConnectorClass';
import {ResizerType} from './common/resizer/ResizerType';
import {ResizerClass} from './common/resizer/ResizserClass';

export class WorkspaceClass {
  elements: IElement[] = [];
  selectedEl: IElement;

  public connectDistance: number = 20;

  constructor(public $element: SVGSVGElement) {

    this.addEvents();
  }

  addEvents() {
    this.$element.addEventListener('mousedown', (e) => {
      if (e.target === this.$element) {
        this.removeSelected();
      } else {
        const element = this.elements.find(f => f.$element === e.target || f.$element === e.target['parentElement']);
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

  setSelected(element: IElement) {
    if (element) {
      this.removeSelected();
      this.selectedEl = element;
      this.selectedEl.selected = true;
    }
  }

  add(element: IElement) {
    this.$element.appendChild(element.$element);
    this.elements.push(element);
    const shape = element as ElementClass;
    if (shape)
      shape.reposition();
    const connector = element as ConnectorClass;
    if (connector) {
      connector.reposition();
      connector.onMove = (point, type: ResizerType) => {
        for (const elem of this.elements.filter((f) => f instanceof ElementClass)) {
          const el = elem as ElementClass;
          let smallestDistance = Number.MAX_VALUE;
          let smallestRes = null;
          for (const res of el.resizers.resizers) {
            const distance = Math.sqrt(Math.pow(res.pageX - point.pageX, 2) + Math.pow(res.pageY - point.pageY, 2));
            res.removeConnector(connector, type);
            if (distance < smallestDistance) {
              smallestDistance = distance;
              smallestRes = res;
            }
          }
          if (smallestDistance <= this.connectDistance) {
            const rect = this.$element.getBoundingClientRect();
            if (type === ResizerType.L) {
              connector.p1.x = smallestRes.pageX - rect.left + smallestRes.size / 2;
              connector.p1.y = smallestRes.pageY - rect.top + smallestRes.size / 2;
              smallestRes.addConnector(connector, ResizerType.L);
            }
            if (type === ResizerType.R) {
              connector.p2.x = smallestRes.pageX - rect.left + smallestRes.size / 2;
              connector.p2.y = smallestRes.pageY - rect.top + smallestRes.size / 2;
              smallestRes.addConnector(connector, ResizerType.R);
            }
            connector.reposition();
          }
        }
      };
    }
  }

  remove() {
    if (!this.selectedEl)
      return;
    const ind = this.elements.indexOf(this.selectedEl);
    if (ind === -1)
      return;
    this.$element.removeChild(this.selectedEl.$element);
    this.elements.splice(ind, 1);
    this.selectedEl.selected = false;
    this.selectedEl = null;
  }
}
