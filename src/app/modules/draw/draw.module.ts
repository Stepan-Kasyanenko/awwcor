import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieModule} from 'ngx-cookie';
import 'hammerjs';

// components
import {WorkspaceComponent} from './workspace/workspace.component';
import {drawRouting} from './draw.routing';

// material
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forChild(),
    drawRouting,
    MatButtonModule
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
