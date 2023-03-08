import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent {
  //Usally we have encapsulation that all the data and methods that operate on that data are kept in private.the consumer of the encapsulated object knows that it will work but does not know how it will work.

  //The view encapsulation in Angualar is strategy that how angualr hides the styles defined in the component from bleeding over to the parts of the application.

  // Three strategies
  // ViewEncapsulation.None - there is no shadow dom, style is not scoped to the component
  // ViewEncapsulation.Emulated - angular will create shadow dom for the compoenent and style is scoped to the environment.
  // ViewEncapsulation.ShadowDOM
}