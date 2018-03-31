import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'donut-chart',
    template: `
        <div class="donut-chart" #donut></div>
        <button class="randomize">randomize</button>
    `,
    styles: [`
    body {
        width: 960px;
        height: 500px;
        position: relative;
      }
      
      svg {
          width: 100%;
          height: 100%;
      }
      
      path.slice{
          stroke-width:2px;
      }
      
      polyline{
          opacity: .3;
          stroke: black;
          stroke-width: 2px;
          fill: none;
      }
    `]
})
export class DonutChartComponent implements OnInit {

    @ViewChild('donut', { read: ElementRef }) donut: ElementRef;

    ngOnInit() {
        
    }
}