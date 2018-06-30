import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieModule} from 'ngx-cookie';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forChild(),
  ],
  declarations: [

  ],
  providers: [
  ],
  exports: [
  ],
  entryComponents: [
  ]
})
export class DrawModule {
}
