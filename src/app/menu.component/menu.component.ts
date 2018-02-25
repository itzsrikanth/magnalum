import { Component, ViewChild, ElementRef } from '@angular/core';
import { scrollTop } from '../animations';

@Component({
    selector: 'menu-nav',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [
        scrollTop
    ]
})
export class MenuComponent {
    @ViewChild('imageSplit') imageSplit: ElementRef;
    scrollTop: number;
    menus = [
        'home',
        'about us',
        'products',
        'production technology',
        'research & development',
        'contact us',
        'terms & conditions'
    ];

    imageUrls = [
        [
            'photo-slug-120244237.jpg',
            'Original_Image_before_ASTC_compression.jpg'
        ], [
            'Image_Spring_17_2.gif',
            'image-in-the-image-2204798_960_720.jpg'
        ], [
            'Image-Porkeri_001.jpg',
            '75.jpg'
        ], [
            'photo-slug-120244237.jpg',
            'Original_Image_before_ASTC_compression.jpg'
        ], [
            'Image_Spring_17_2.gif',
            'image-in-the-image-2204798_960_720.jpg'
        ], [
            'Image-Porkeri_001.jpg',
            '75.jpg'
        ], [
            'bb5541b1d203719b1fac2c4784301e63.jpg',
            'bed4eeed5dc4566c548de5f2b2210489.jpg'
        ]
    ];

    showSubMenu(index: number) {
        const imgSplit: HTMLDivElement = this.imageSplit.nativeElement;
        this.scrollTop = -index * imgSplit.offsetHeight;
        console.log(this.scrollTop);
    }
}