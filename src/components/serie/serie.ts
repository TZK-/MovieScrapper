import { Component } from '@angular/core';

/**
 * Generated class for the SerieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'serie',
  templateUrl: 'serie.html'
})
export class SerieComponent {

  text: string;

  constructor() {
    console.log('Hello SerieComponent Component');
    this.text = 'Hello World';
  }

}
