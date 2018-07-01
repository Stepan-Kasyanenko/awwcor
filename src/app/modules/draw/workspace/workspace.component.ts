import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ElementClass} from '../classes/common/ElementClass';
import {RectClass} from '../classes/shapes/RectClass';
import {CircleClass} from '../classes/shapes/CircleClass';
import {WorkspaceClass} from '../classes/WorkspaceClass';
import {ShapeClass} from '../classes/shapes/ShapeClass';
import {LineClass} from '../classes/shapes/LineClass';
import {ConnectorClass} from '../classes/ConnectorClass';
import {MatButton} from '@angular/material';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workspace: WorkspaceClass;
  @ViewChild('workspace') workspaceElement: ElementRef;
  @ViewChild('rectButton') rectButton: MatButton;

  currentAction: Function;

  constructor() {
  }


  ngOnInit() {
    this.workspace = new WorkspaceClass(this.workspaceElement.nativeElement);
    document.addEventListener('dragover', function (event) {
      // prevent default to allow drop
      event.preventDefault();
    }, false);

  }

  addRect(x, y) {
    const rect = new RectClass({width: 75, height: 75});
    this.addToWorksspace(rect, x - 40, y - 40);
  }

  addCircle(x, y) {
    const circle = new CircleClass({width: 75, height: 75});
    this.addToWorksspace(circle, x - 40, y - 40);
  }

  addLine(x, y) {
    const line = new LineClass({width: 100, height: 5});
    this.addToWorksspace(line, x - 55, y - 7.5);
  }

  addConnector(x, y) {
    const connector = new ConnectorClass(this.workspace, {x: x - 50, y: y}, {x: x + 50, y: y});
    this.workspace.add(connector);
  }

  addToWorksspace(el: ShapeClass, x, y) {
    const element = new ElementClass(this.workspace, el, {x: x, y: y});
    this.workspace.add(element);
  }

  deleteFromWorkspace() {
    this.workspace.remove();
  }

  dragstart(e, action) {
    e.dataTransfer.setData('text/plain', null);
    this.currentAction = action;
  }

  dragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  drop(e) {
    e.preventDefault();
    if (!this.currentAction)
      return;
    this.currentAction.bind(this)(e.offsetX, e.offsetY);
    this.currentAction = null;
  }

}
