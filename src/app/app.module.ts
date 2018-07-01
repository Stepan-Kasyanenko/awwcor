import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieModule} from 'ngx-cookie';

// routing
import {appRouting} from './app.routing';

// modules
import {DrawModule} from './modules/draw/draw.module';

// components
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CookieModule.forRoot(),
    DrawModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
