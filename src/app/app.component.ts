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
  parallelogram = [
    '/assets/assets/1.18MeshMagnaliumPowder.jpg',
    '/assets/assets/2.40MeshMagnaliumPowder.jpg',
    '/assets/assets/2.Grade2MagnesiumPowder.jpg',
    '/assets/assets/4.80MeshMagnaliumPowder.jpg',
    '/assets/assets/5.100MeshMagnaliumPowder.jpg'
  ];
  cardImgUrls = [
    'photo-slug-120244237.jpg',
    'Original_Image_before_ASTC_compression.jpg',
    'Image_Spring_17_2.gif',
    'image-in-the-image-2204798_960_720.jpg'
  ];

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
