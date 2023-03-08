import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Anamika';
  progresValue;

  constructor(private router: Router) {
    this.progresValue = 0;
    console.log(this.name);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // this.progresValue = (winScroll / height) * 100;

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  // The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar.

  // clientHeight: it includes the element's padding, but not its border, margin or horizontal scrollbar (if present)

  // The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.

  // documentElement property gives you the html element, document.body property gives you the body element.

  //Without constructor and ngOnit the component will initiate.
  //Constructor used to keep all the instance of dependency injection
  //ngOnit used to add specific initializaion logic.

  navigateToAuthPage() {
    this.router.navigate(['auth/login']);
  }

  obsv = new Observable((observer) => {
    console.log('Observale started')
    setTimeout(() => {
      observer.next(9000)
    }, 1000)
  })
}
