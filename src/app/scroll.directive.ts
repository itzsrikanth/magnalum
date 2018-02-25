import { Directive, HostListener, ElementRef } from '@angular/core';
import { MasterService } from './master.service';

@Directive({
    selector: '[scroll-event]'
})
export class ScrollEventDirective {
    @HostListener('scroll', ['$event'])
        onScroll(e) {
            // console.log(e);
            this.master.scrollStream$.next(e);
        }

    constructor(
        private master: MasterService
    ) { }
}