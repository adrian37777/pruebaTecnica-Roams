import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personajes } from '../interface/personajes-interface';

@Injectable({ providedIn: 'root' })
export class buscadorService {
  private apyUrl = 'https://www.breakingbadapi.com/api';

  constructor(private http: HttpClient) {}

  buscarPersonaje(termino: string): Observable<personajes[]> {
    const url = `${this.apyUrl}/characters/?name=${termino}`;

    return this.http.get<personajes[]>(url);
  }

  mostrarTodos(): Observable<personajes[]> {
    const url = `${this.apyUrl}/characters`;

    return this.http.get<personajes[]>(url);
  }
}
