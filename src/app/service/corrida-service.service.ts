import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../models/corrida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorridaServiceService {

  constructor(private http: HttpClient) {}

  //LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {

    const urlApi =
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

    return this.http.get<Corrida[]>(urlApi);
  }

  //BUSCAR UMA CORRIDA PELO ID
  listarCorrida(idCorrida: number): Observable<Corrida> {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.get<Corrida>(urlApi);
  }

  //ADICIONAR CORRIDA
  adicionarCorrida(corrida: Corrida): Observable<Corrida> {

    const urlApi =
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

    return this.http.post<Corrida>(urlApi, corrida);
  }

  //REMOVER CORRIDA
  removerCorrida(idCorrida: number): Observable<Corrida> {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.delete<Corrida>(urlApi);
  }

  //ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<Corrida> {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    return this.http.put<Corrida>(urlApi, corrida);
  }

}