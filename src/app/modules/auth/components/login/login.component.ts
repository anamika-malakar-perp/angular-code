import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  //Usally we have encapsulation that all the data and methods that operate on that data are kept in private.the consumer of the encapsulated object knows that it will work but does not know how it will work.

  //The view encapsulation in Angualar is strategy that how angualr hides the styles defined in the component from bleeding over to the parts of the application.

  // Three strategies
  // ViewEncapsulation.None
  // ViewEncapsulation.Emulated
  // ViewEncapsulation.ShadowDOM
}