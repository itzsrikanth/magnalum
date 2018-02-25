import { trigger, transition, style, state, animate } from '@angular/animations';

export const scrollTop = trigger('scrollTop', [
    state('intermediate', style({
        transform: 'translateY({{scrollTop}}px)'
    }), {params: {scrollTop: 0}}),
    transition('* => intermediate', animate('4000ms ease-in'))
]);

export const headerTopCollapse = trigger('headerTopCollapse', [
    state('collapsed', style({
        height: '50px'
    })),
    state('expanded', style({
        height: '120px'
    })),
    transition('* => *', animate('400ms ease-in'))
]);

export const pageEnter = trigger('pageEnter', [
    state('visible', style({
        transform: 'translateY(0)'
    })),
    transition('void => *', animate(2000, style({
        transform: 'translateY(100%)'
    })))
]);