import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MasterService {
    scrollStream$ = new Subject<any>();
    mouseWheelStream$ = new Subject<any>();
}