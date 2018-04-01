import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'menu-demand',
    templateUrl: './menuDemand.component.html',
    styleUrls: ['./menuDemand.component.scss']
})
export class MenuDemandComponent {
    @Output() menuClick = new EventEmitter();
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

    constructor(
        private router: Router
    ) { }

    menuRouting(index) {
        if (!this.menus[index]['children']) {
            this.router.navigate([this.menus[index]['link']]);
        } else {
            this.menus[index]['childActive'] = !this.menus[index]['childActive'];
        }
    }
}
