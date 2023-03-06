import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Anamika';

  // constructor() {
  //   console.log(this.name);
  // }

  //Without constructor and ngOnit the component will initiate.
}
