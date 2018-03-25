import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import {
  headerTopCollapse,
  pageEnter
} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    headerTopCollapse,
    pageEnter
  ]
})
export class AppComponent implements OnInit {

  private headerTopCollapsed = 'expanded';
  private pageEnterState: string;

  constructor(
    private elementRef: ElementRef,
    private master: MasterService
  ) { }

  ngOnInit() {
    this.master.scrollStream$
      .subscribe((event) => {

        // console.log(event);
        // header top collapse on scrollTop > 0
        if (event.target.scrollTop > 50) {
          this.headerTopCollapsed = 'collapsed';
        } else {
          this.headerTopCollapsed = 'expanded';
        }

      });

    this.pageEnterState = 'visible';
  }

  selectProduct(productId) {

  }
}
