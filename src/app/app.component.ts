import { Component } from '@angular/core';
//remove admin module from imports in app module and back to the proper functionality of lazy loading
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Icecream Shop';

  user = false;
  admin = true;
}
