// This will be an entry point of our application,
// that is the component that will be rendered when the application loads.
import { Component } from "@angular/core";
@Component({
  selector: "app-main",
  template: "<h1>Hello, {{name}}</h1>",
})
export class AppComponent {
  name = "Angular";
  constructor() {
    console.log("app-main component created");
  }
}
