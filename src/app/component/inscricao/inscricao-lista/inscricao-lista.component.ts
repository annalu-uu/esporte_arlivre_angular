import { Component, OnInit, signal } from '@angular/core';
import { Inscricao } from '../../../models/inscricao';
import { InscricaoServiceService } from '../../../service/inscricao-service.service';

@Component({
  selector: 'app-inscricao-lista',
  standalone: true,
  imports: [],
  templateUrl: './inscricao-lista.component.html',
  styleUrl: './inscricao-lista.component.css'
})
export class InscricaoListaComponent implements OnInit {

  //LISTA DE INSCRIÇÕES
  listaInscricoes = signal<Inscricao[]>([]);

  //CONSTRUTOR
  constructor(
    private inscricaoService: InscricaoServiceService
  ) {}

  //EXECUTA QUANDO O COMPONENTE É CARREGADO
  ngOnInit() {
    this.listar()
  }

  //LISTAR INSCRIÇÕES
  listar() {

    this.inscricaoService.listarInscricoes()
      .subscribe({

        next: (dadosInscricoes) => {

          // COLOCA AS INSCRIÇÕES DENTRO DO SIGNAL
          this.listaInscricoes.set(dadosInscricoes)

          console.table(this.listaInscricoes())

        },

        error: (msgErro) => {

          console.log(
            'ERRO AO LISTAR INSCRIÇÕES:',
            msgErro
          )

        }

      })

  }

  //EXCLUIR INSCRIÇÃO
  excluir(id: number) {

    if (confirm('Deseja excluir esta inscrição?')) {

      this.inscricaoService.removerInscricao(id)
        .subscribe({

          next: (resposta) => {

            console.log(
              'INSCRIÇÃO EXCLUÍDA COM SUCESSO!',
              resposta
            )

            // ATUALIZA A LISTA
            this.listar();

          },

          error: (msgErro) => {

            console.log(
              'ERRO AO EXCLUIR INSCRIÇÃO:',
              msgErro
            )

          }

        })

    }

  }

}