import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';


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


@Directive({
    selector: '[mouse-wheel]',
})
export class MouseWheelDirective {
    @HostListener('mousewheel', ['$event'])
        onMouseWheel(e) {
            this.master.mouseWheelStream$.next(e);
        }

    constructor(
        private master: MasterService
    ) { }
}

@Directive({
    selector: '[smoothScroll]'
})
export class SmoothScrollDirective implements OnInit {
    @Input('smoothScroll') pageNumber;
    constructor(
        private elementRef: ElementRef
    ) { }

    ngOnInit() {
        this.elementRef.nativeElement.scrollTo({
            top: this.pageNumber * window.innerHeight,
            behavior: 'smooth'
        });
    }
}
