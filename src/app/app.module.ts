import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';




import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
