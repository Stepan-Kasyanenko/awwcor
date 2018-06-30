import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ElementClass} from '../classes/common/ElementClass';
import {RectClass} from '../classes/shapes/RectClass';
import {CircleClass} from '../classes/shapes/CircleClass';
import {WorkspaceClass} from '../classes/WorkspaceClass';
import {ShapeClass} from '../classes/shapes/ShapeClass';
import {LineClass} from '../classes/shapes/LineClass';
import {ConnectorClass} from '../classes/ConnectorClass';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workspace: WorkspaceClass;
  @ViewChild('workspace') workspaceElement: ElementRef;

  constructor() {
  }


  ngOnInit() {
    this.workspace = new WorkspaceClass(this.workspaceElement.nativeElement);
    this.addRect();
    this.addConnector();
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

  addConnector() {
    const connector = new ConnectorClass(this.workspace, {x: 100, y: 20}, {x: 200, y: 20});
    this.workspace.add(connector);
  }

  addToWorksspace(el: ShapeClass) {
    const element = new ElementClass(this.workspace, el);
    this.workspace.add(element);
  }

  deleteaFromWorksspace() {
    this.workspace.remove();
  }

}
