import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Anamika';
  progresValue;

  constructor(private router: Router) {
    console.log(this.name);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var h = document.documentElement, 
      b = document.body,
      scrollTop = 'scrollTop',
      scrollHeight = 'scrollHeight';
      this.progresValue = (h[scrollTop]||b[scrollTop]) / ((h[scrollHeight]||b[scrollHeight]) - h.clientHeight) * 100;
      console.log(this.progresValue)
  }

  //Without constructor and ngOnit the component will initiate.
  //Constructor used to keep all the instance of dependency injection
  //ngOnit used to add specific initializaion logic.

  navigateToAuthPage() {
    this.router.navigate(['auth/login']);
  }
}
