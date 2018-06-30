import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ElementClass} from '../classes/common/ElementClass';
import {RectClass} from '../classes/shapes/RectClass';
import {CircleClass} from '../classes/shapes/CircleClass';
import {WorkspaceClass} from '../classes/WorkspaceClass';
import {ShapeClass} from '../classes/shapes/ShapeClass';
import {LineClass} from '../classes/shapes/LineClass';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workspace: WorkspaceClass;

  constructor() {
  }

  @ViewChild('workspace') workspaceElement: ElementRef;

  ngOnInit() {
    this.workspace = new WorkspaceClass(this.workspaceElement.nativeElement);
  }

  addRect() {
    const rect = new RectClass({width: 50, height: 50});
    this.addToWorksspace(rect);
  }

  addCircle() {
    const circle = new CircleClass({width: 50, height: 50});
    this.addToWorksspace(circle);
  }
  addLine() {
    const line = new LineClass({width: 100, height: 5});
    this.addToWorksspace(line);
  }

  addToWorksspace(el: ShapeClass) {
    const element = new ElementClass(this.workspace, el);
    this.workspace.add(element);
  }

  deleteaFromWorksspace() {
    this.workspace.remove();
  }

}
