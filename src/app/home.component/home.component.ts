import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', './iPhone.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    
    parallelogram = [
        { 
            url: '/assets/assets/1.18MeshMagnaliumPowder.jpg', 
            text: '1.18 Mesh Magnalium Powder',
            id: 1
        }, { 
            url: '/assets/assets/2.40MeshMagnaliumPowder.jpg', 
            text: '2.40 Mesh Magnalium Powder',
            id: 2,
        }, {
            url: '/assets/assets/2.Grade2MagnesiumPowder.jpg', 
            text: 'Grade 2 Magnalium Powder',
            id: 3,
        }, { 
            url: '/assets/assets/4.80MeshMagnaliumPowder.jpg', 
            text: '4.80 Mesh Magnalium Powder',
            id: 4,
        }, { 
            url: '/assets/assets/5.100MeshMagnaliumPowder.jpg', 
            text: '5.100 Mesh Magnalium Powder',
            id: 5,
        },
    ];
    cardImgUrls = [
        'photo-slug-120244237.jpg',
        'Original_Image_before_ASTC_compression.jpg',
        'Image_Spring_17_2.gif',
        'image-in-the-image-2204798_960_720.jpg'
    ];
    private productIndex = 0;
    private WindowHeight = 0;
    private ratio = 0;
    
    constructor(
        private masterService: MasterService,
        // private changeDetector: ChangeDetectorRef
    ) { }
    
    ngOnInit() {
        this.WindowHeight = window.innerHeight;
        this.masterService.scrollStream$
        .subscribe(event => {
            this.ratio = event['target']['scrollTop']/this.WindowHeight;
        });
    }

    ngAfterViewInit() {
        // this.init = true;
        // this.changeDetector.detectChanges();
    }

    selectProduct(productIndex) {
        console.log(productIndex);
        this.productIndex = productIndex;
    }

}