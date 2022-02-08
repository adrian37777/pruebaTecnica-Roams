import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { personajes } from './interface/personajes-interface';
import { buscadorService } from './service/buscador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Buscador personajes - Roams';

  personajes: personajes[] = [];
  error: boolean = false;
  subscription: Subscription;
  terminoRecibido: string = '';

  constructor(public buscadorService: buscadorService) {}

  ngOnInit() {
    this.subscription = this.buscadorService
      .mostrarTodos()
      .subscribe((data) => {
        this.personajes = data;
      });
  }

  enviar(termino: string) {
    this.terminoRecibido = termino;
    this.buscadorService.budcarPersonaje(termino).subscribe((data) => {
      this.personajes = data;

      this.personajes.length == 0 ? (this.error = true) : (this.error = false);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
