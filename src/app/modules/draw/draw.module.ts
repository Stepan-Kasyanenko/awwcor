import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieModule} from 'ngx-cookie';
import 'hammerjs';

// components
import {WorkspaceComponent} from './workspace/workspace.component';
import {drawRouting} from './draw.routing';

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forChild(),
    drawRouting
  ],
  declarations: [
    WorkspaceComponent
  ],
  providers: [],
  exports: [],
  entryComponents: [
    WorkspaceComponent
  ]
})
export class DrawModule {
}
