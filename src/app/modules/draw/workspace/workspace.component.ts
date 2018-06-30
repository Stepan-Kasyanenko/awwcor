import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ElementClass} from '../classes/common/ElementClass';
import {RectClass} from '../classes/shapes/RectClass';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() {
  }

  @ViewChild('workspace') workspace: ElementRef;

  ngOnInit() {
    console.log('WorkspaceComponent', this.workspace);
  }

  addRect() {
    const rect = new RectClass(30, 30);
    const element = new ElementClass(this.workspace.nativeElement, rect);
    this.workspace.nativeElement.appendChild(element.container.$element);
  }

}
