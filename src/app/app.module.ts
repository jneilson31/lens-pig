import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderTopComponent } from './shared/components/site-header/site-header-top/site-header-top.component';
import { SiteHeaderBottomComponent } from './shared/components/site-header/site-header-bottom/site-header-bottom.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { HomeComponent } from './home/home.component';
import { MostPopularBrandComponent } from './shared/components/filter-search-tabs/most-popular-brand/most-popular-brand.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';

import { HttpModule } from '@angular/http';
import { PricesService } from './shared/services/prices.service';
import { LinksService } from './shared/services/links.service';

import { FilterSearchTabsComponent } from './shared/components/filter-search-tabs/filter-search-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderTopComponent,
    SiteHeaderBottomComponent,
    SiteFooterComponent,
    HomeComponent,
    MostPopularBrandComponent,
    HowItWorksComponent,
    FilterSearchTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PricesService, LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
