import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dinamic title';
  number = new Date().getFullYear();
  arr = [1, 2, 3, 4];
  obj = { a: 1, b: { c: 3 } };
  inputValue = '';

  //img = 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png';
  constructor() {
    // setTimeout(() => {
    //   this.img = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
    // }, 5000);
    // }
  }
  onInput(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  onClick() {
    console.log('Кликнуто!');
  }
  onBlur(event: any) {
    console.log('');
  }
}
