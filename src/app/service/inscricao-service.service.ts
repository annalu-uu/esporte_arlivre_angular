import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscricao } from '../models/inscricao';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InscricaoServiceService {

  constructor(private http: HttpClient) { }

  //LISTAR TODAS AS INSCRIÇÕES
  listarInscricoes(): Observable<Inscricao[]> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/inscricao`;

    return this.http.get<Inscricao[]>(urlApi);
  }

  //ADICIONAR UMA INSCRIÇÃO
  adicionarInscricao(inscricao: Inscricao): Observable<Inscricao> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/inscricao`;

    return this.http.post<Inscricao>(urlApi, inscricao);
  }

  //REMOVER UMA INSCRIÇÃO
  removerInscricao(idInscricao: number): Observable<Inscricao> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/inscricao/${idInscricao}`;

    return this.http.delete<Inscricao>(urlApi);
}

}
