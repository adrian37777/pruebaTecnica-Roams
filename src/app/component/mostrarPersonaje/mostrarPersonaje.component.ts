import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrarPersonaje',
  templateUrl: 'mostrarPersonaje.component.html',
})
export class mostrarPersonajeComponent {
  @Input() personajes: string[] = [];
}
