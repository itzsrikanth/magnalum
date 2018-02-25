import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-stack',
    templateUrl: './image.stack.component.html',
    styleUrls: ['./image.stack.component.scss']
})
export class ImageStackComponent {
    @Input() ImageUrl: string;
}