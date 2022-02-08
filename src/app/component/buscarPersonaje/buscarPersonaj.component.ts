import { Component, EventEmitter, Output } from '@angular/core';
import { buscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscarPersonajeComponent',
  templateUrl: 'buscarPersonaje.component.html',
})
export class buscarPersonajeComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';
  error: boolean = false;

  constructor(public buscadorService: buscadorService) {}
  enviar() {
    if (this.termino) {
      this.onEnter.emit(this.termino);
    }
  }
}
