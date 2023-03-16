import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  items = [
    'HTML',
    'CSS',
    'Java',
    'React',
    'JavaScript',
    'Angular',
    'Vue',
    'Sass',
    'Tailwind',
    'Typescript',
    'Styled-components'
  ]

  titulos = [
    "Olá, meu nome é Felipe Maurente e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:",
    "Hello there, my name is Felipe Maurente and I am a Front-End developer, Technologies I have experience with:",
    "Hola, mi nombre es Felipe Maurente y soy desarrollador Front-End, Tecnologías que tengo experiencia:"
  ];

  i = 0;

  setI(n: number) {
    return this.i = n
  }
}
