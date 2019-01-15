import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the NumberToArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'numberToArray',
})
export class NumberToArrayPipe implements PipeTransform {
    transform(value:number, ...args) {
        let res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}
