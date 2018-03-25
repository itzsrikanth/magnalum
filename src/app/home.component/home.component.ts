import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

}