import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atleta } from '../models/atleta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {

  // CONSTRUTOR
  constructor(private http: HttpClient) {}

  // LISTAR TODOS OS ATLETAS
  listarAtletas(): Observable<Atleta[]> {

    const urlApi = 'https:// 6a835a9ecb486d243403a40e.mockapi.io/api/v1/:ponto final';

    return this.http.get<Atleta[]>(urlApi);
  }

  // BUSCAR UM ATLETA PELO ID
  listarAtleta(idAtleta: number): Observable<Atleta> {

    const urlApi = `https:// 6a835a9ecb486d243403a40e.mockapi.io/api/v1/:ponto final/${idAtleta}`;

    return this.http.get<Atleta>(urlApi);
  }

  // ADICIONAR ATLETA
  adicionarAtleta(atleta: Atleta): Observable<Atleta> {

    const urlApi = 'https:// 6a835a9ecb486d243403a40e.mockapi.io/api/v1/:ponto final';

    return this.http.post<Atleta>(urlApi, atleta);
  }

  // REMOVER ATLETA
  removerAtleta(idAtleta: number): Observable<Atleta> {

    const urlApi = `https:// 6a835a9ecb486d243403a40e.mockapi.io/api/v1/:ponto final/${idAtleta}`;

    return this.http.delete<Atleta>(urlApi);
  }

  // ALTERAR ATLETA
  alterarAtleta(atleta: Atleta): Observable<Atleta> {

    const urlApi = `https:// 6a835a9ecb486d243403a40e.mockapi.io/api/v1/:ponto final/${atleta.id}`;

    return this.http.put<Atleta>(urlApi, atleta);
  }
}