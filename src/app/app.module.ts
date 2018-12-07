import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderTopComponent } from './shared/components/site-header/site-header-top/site-header-top.component';
import { SiteHeaderBottomComponent } from './shared/components/site-header/site-header-bottom/site-header-bottom.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderTopComponent,
    SiteHeaderBottomComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
