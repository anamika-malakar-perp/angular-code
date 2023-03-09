import { Component } from "@angular/core";

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls : ['./user-data.component.scss']
})

export class UserData {
  //data binding is a technaquie where the data is in sync between the component and view.
  //two type:- one way binding and two way binding
  //one way binding :- i)either from view to component or ii)component to view
  //From component to view : interpolation and property binding - allows us to bind HTML element property to a property in the component.example: href, src, textContent etc.
  //and set the properties of custom compoenents and dirctives

  title = 'Angular data'

  //From view to component :- Event binding such as keystokes, click, hover

  //Two way data binding - banana in a box
  //It uses ngModel directive

  value = ""
}