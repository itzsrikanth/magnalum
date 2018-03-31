import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
    coCard = [
        {
            text: 'The quick brown fox jumps over the lazy dog'
        },{
            text: 'The quick brown fox jumps over the lazy dog'
        },{
            text: 'The quick brown fox jumps over the lazy dog'
        },{
            text: 'The quick brown fox jumps over the lazy dog'
        },
    ]

    selectProduct(productIndex) {
        console.log(productIndex);
        this.productIndex = productIndex;
    }

}