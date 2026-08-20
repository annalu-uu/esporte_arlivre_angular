import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Inscricao } from '../../models/inscricao';
import { Atleta } from '../../models/atleta';
import { Corrida } from '../../models/corrida';

import { InscricaoServiceService } from '../../service/inscricao-service.service';
import { AtletaServiceService } from '../../service/atleta-service.service';
import { CorridaServiceService } from '../../service/corrida-service.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent {

  // LISTA DE ATLETAS
  listaAtletas: Atleta[] = [];

  // LISTA DE CORRIDAS
  listaCorridas: Corrida[] = [];

  // ID DO ATLETA ESCOLHIDO
  idAtleta: number = 0;

  // ID DA CORRIDA ESCOLHIDA
  idCorrida: number = 0;

  // CONSTRUTOR
  constructor(
    private inscricaoService: InscricaoServiceService,
    private atletaService: AtletaServiceService,
    private corridaService: CorridaServiceService
  ) {}

  // EXECUTA QUANDO O COMPONENTE É CARREGADO
  ngOnInit() {

    // BUSCA OS ATLETAS
    this.listarAtletas();

    // BUSCA AS CORRIDAS
    this.listarCorridas();

  }

  // BUSCA OS ATLETAS NA API
  listarAtletas() {

    this.atletaService.listarAtletas()
      .subscribe({

        next: (dadosAtletas) => {

          this.listaAtletas = dadosAtletas;

        },

        error: (msgErro) => {

          console.log('ERRO AO LISTAR ATLETAS:', msgErro);

        }

      });

  }

  // BUSCA AS CORRIDAS NA API
  listarCorridas() {

    this.corridaService.listarCorridas()
      .subscribe({

        next: (dadosCorridas) => {

          this.listaCorridas = dadosCorridas;

        },

        error: (msgErro) => {

          console.log('ERRO AO LISTAR CORRIDAS:', msgErro);

        }

      });

  }

  // REALIZA A INSCRIÇÃO
  inscrever() {

    const inscricao = new Inscricao();

    // COLOCA O ID DO ATLETA
    inscricao.idAtleta = this.idAtleta;

    // COLOCA O ID DA CORRIDA
    inscricao.idCorrida = this.idCorrida;

    // ENVIA PARA A API
    this.inscricaoService.adicionarInscricao(inscricao)
      .subscribe({

        next: (resposta) => {

          console.log(
            'INSCRIÇÃO REALIZADA COM SUCESSO!',
            resposta
          );

          // LIMPA OS CAMPOS
          this.idAtleta = 0;
          this.idCorrida = 0;

        },

        error: (msgErro) => {

          console.log(
            'ERRO AO REALIZAR INSCRIÇÃO:',
            msgErro
          );

        }

      });

  }

}