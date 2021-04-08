import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-basics';
  firstName = 'Enrique';
  selectedValue = '';
  animal = {
    name: 'Lion',
    image: './assets/images/lion.jpg',
  };
  htmlContent = 'The name is Bond <b>James Bond<b/>';
  scriptContent = "<script>console.log('fire')</script>";
  theme = {
    color: 'indianred',
    fontSize: '15px',
    opacity: 0.7,
  };
  expression = '';
  result = '0';

  public showName() {
    //console.log(this.firstName);
    this.firstName = 'Carlos';
  }

  convertToDate() {
    const date = new Date();
    return date.toLocaleDateString();
  }

  calculate() {
    this.result = eval(this.expression);
  }
}
