import { Component, HostListener, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MasterService } from './services/master.service';
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
export class AppComponent implements OnInit, AfterViewInit {

  private headerTopCollapsed = 'expanded';
  private pageEnterState: string;
  private pageNumber = 0;
  private init = true;

  constructor(
    private elementRef: ElementRef,
    private master: MasterService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.master.scrollStream$
      .subscribe((event) => {

        if (event.target.scrollTop > 50) {
          this.headerTopCollapsed = 'collapsed';
        } else {
          this.headerTopCollapsed = 'expanded';
        }

      });

      this.master.mouseWheelStream$
        .subscribe(event => {
          if (event.deltaY > 0 && this.pageNumber < 4) {
            this.pageNumber++;
          } 
          else if (event.deltaY < 0 && this.pageNumber > 0) {
            this.pageNumber--;
          }
        })

    this.pageEnterState = 'visible';
  }

  ngAfterViewInit() {
    this.init = false;
    this.changeDetector.detectChanges();
  }

  selectProduct(productId) {

  }
}
