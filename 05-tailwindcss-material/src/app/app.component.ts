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

  lugares: any = [
    { nombre: 'Florería la gardenia' },
    { nombre: 'Donas la pasadita' },
    { nombre: 'Veterinaria huellas' },
  ];

  personas: any = [
    { edad: 10, nombre: 'Suri' },
    { edad: 28, nombre: 'Mónica' },
    { edad: 18, nombre: 'Jennifer' },
    { edad: 20, nombre: 'Shirley' },
    { edad: 1, nombre: 'Bebé' },
    { edad: 18, nombre: 'Juan' },
  ];

  historial: any = [
    { estatura: 1.5, porte: 'pequeño', edad: 18, nombre: 'Kevin' },
    { estatura: 1.8, porte: 'mediano', edad: 15, nombre: 'Lui' },
    { estatura: 2.0, porte: 'alto', edad: 21, nombre: 'Karla' },
    { estatura: 1.7, porte: 'mediano', edad: 14, nombre: 'Roman' },
    { estatura: 2.2, porte: 'alto', edad: 25, nombre: 'Juan' },
    { estatura: 1.4, porte: 'pequeño', edad: 28, nombre: 'pedro' },
  ];

  sitios: any = [
    {
      plan: 'pagado',
      cercania: 1,
      distancia: 1,
      active: true,
      nombre: 'Florería la Gardenia',
    },
    {
      plan: 'gratuito',
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: 'Donas la pasadita',
    },
    {
      plan: 'gratuito',
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: 'Veterinaria Huellitas Felices',
    },
    {
      plan: 'gratuito',
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: 'Sushi Suhiroll',
    },
    {
      plan: 'pagado',
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: 'Hotel la Gracia',
    },
    {
      plan: 'gratuito',
      cercania: 3,
      distancia: 120,
      active: false,
      nombre: 'Zapatería el Clavo',
    },
  ];

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
