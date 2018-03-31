import { Component } from '@angular/core';

@Component({
    selector: 'wave-button',
    template: `
        <div class="btn-holder d-flex align-items-center justify-content-center">
            <div class="btn-wave"></div>
            <div class="btn-wave"></div>
            <div class="btn-wave"></div>
            <div class="btn-content d-flex align-items-center justify-content-center">
                <ng-content select="i"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./wave.button.component.scss'],
    animations: [

    ]
})
export class WaveButtonComponent { }