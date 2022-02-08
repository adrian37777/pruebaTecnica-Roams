import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { buscadorService } from './service/buscador.service';
import { mostrarPersonajeComponent } from './component/mostrarPersonaje/mostrarPersonaje.component';
import { buscarPersonajeComponent } from './component/buscarPersonaje/buscarPersonaj.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    mostrarPersonajeComponent,
    buscarPersonajeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [buscadorService],
})
export class AppModule {}
