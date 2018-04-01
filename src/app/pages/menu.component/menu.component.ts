import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { scrollTop } from '../../animations';

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
    @Output() menuClick = new EventEmitter();
    scrollTop: number;
    menus = [
        {text: 'home', link: '/home'},
        {text: 'about us', link: '/about-us'},
        {text: 'products', link: '/home', children: [
            {
                text: 'Magnalium Powder (Mg/Al Alloy Powder)',
                param: 1
            }, {
                text: 'Magnesium Powder',
                param: 2
            }, {
                text: 'Aluminium Powder (Fireworks grade)',
                param: 3
            }, {
                text: 'Aluminium Powder (Lightweight Concretes)',
                param: 4
            }, {
                text: 'Titanium powder (Ti6Al4V)',
                param: 5
            }
        ]},
        {text: 'production technology', link: '/home'},
        {text: 'research & development', link: '/home'},
        {text: 'contact us', link: '/home'},
        {text: 'terms & conditions', link: '/home'},
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