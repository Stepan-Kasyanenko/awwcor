import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieModule} from 'ngx-cookie';

import {AppComponent} from './app.component';

// modules
import {DrawModule} from './modules/draw/draw.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    DrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
