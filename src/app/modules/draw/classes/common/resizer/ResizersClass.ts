import {IElement} from '../../../interfaces/IElement';
import {ResizerType} from './ResizerType';
import {ResizerClass} from './ResizserClass';

export class ResizersClass {
  resizers: ResizerClass[] = [];

  _selected: boolean;

  constructor(public parent: IElement, types: ResizerType[]) {
    for (const t of types) {
      if (!isNaN(+t)) {
        const res = new ResizerClass(parent, +t);
        this.resizers.push(res);
      }
    }
    this.selected = false;
  }

  public reposition() {
    this.resizers.forEach(f => f.position());
  }
  public positionConnectors() {
    this.resizers.forEach(f => f.positionConnectors());
  }

  set selected(val: boolean) {
    this._selected = val;
    if (this._selected) {
      this.resizers.forEach(f => f.show());
    } else {
      this.resizers.forEach(f => f.hide());
    }
  }

  get selected(): boolean {
    return this._selected;
  }
}

