import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataSource:any;
  demoId: string;
  constructor() {
    this.demoId = "ex1";
    this.dataSource = {
      chart: {
        "caption": "Quarterly Expenditure",
        "xAxisname": "Quarter",
        "yAxisName": "Expenditure (In USD)",
        "numberPrefix": "$",
        "baseFont": "Roboto",
        "baseFontSize": "14",
        "labelFontSize": "15",
        "captionFontSize": "20",
        "subCaptionFontSize": "16",
        "paletteColors": "#2c7fb2,#6cc184,#fed466",
        "bgColor": "#ffffff",
        "legendShadow": "0",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "subcaptionFontSize": "14",
        "showHoverEffect": "1"
      },
      "categories": [{
        "category": [{
          "label": "Q1"
        }, {
          "label": "Q2"
        }, {
          "label": "Q3"
        }]
      }],
      "dataset": [{
        "seriesname": "Marketing",
        "data": [{
          "value": "300000"
        }, {
          "value": "200000"
        }, {
          "value": "100000"
        }]
      }, {
        "seriesname": "Management",
        "data": [{
          "value": "600000"
        }, {
          "value": "700000"
        }, {
          "value": "800000"
        }]
      }]
    };
  }

}
