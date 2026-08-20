import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaServiceService } from '../../service/corrida-service.service';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})
export class CorridaComponent {

  //DADOS DA CORRIDA
  descricao: string = '';
  dataCorrida: string = '';
  distancia: string = '';

  //CONSTRUTOR
  constructor(private corridaService: CorridaServiceService) {}

  //FUNÇÃO PARA SALVAR A CORRIDA
  salvar(): void {

    //CRIA UM NOVO OBJETO CORRIDA
    const corrida = new Corrida();

    //COLOCA OS DADOS DO FORMULÁRIO NO OBJETO
    corrida.descricao = this.descricao;
    corrida.dataCorrida = this.dataCorrida;
    corrida.distancia = this.distancia;

    //ENVIA A CORRIDA PARA A API
    this.corridaService.adicionarCorrida(corrida)
      .subscribe({

        //EXECUTADO SE O CADASTRO DER CERTO
        next: (resposta) => {

          console.log('CORRIDA CADASTRADA COM SUCESSO!', resposta);

          //LIMPA O FORMULÁRIO
          this.limparDados();

        },

        //EXECUTADO SE DER ERRO
        error: (msgErro) => {

          console.log('ERRO AO CADASTRAR CORRIDA:', msgErro);

        }

      });

  }

  //LIMPA OS CAMPOS DO FORMULÁRIO
  limparDados(): void {

    this.descricao = '';
    this.dataCorrida = '';
    this.distancia = '';

  }

}