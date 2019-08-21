import { PipeTransform, Pipe } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Pipe({name : 'filterkar'})

export class CustomPipe implements PipeTransform {
    constructor(private fc: FilterComponent){}
    transform(value,text) {
        if(!text) {
            return value;
        } else {
            return value.filter( friend => friend.toLowerCase().includes(text));
        }
    }
}
