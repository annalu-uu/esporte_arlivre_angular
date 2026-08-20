import { Component, signal } from '@angular/core';
import { Corrida } from '../../../models/corrida';
import { CorridaServiceService } from '../../../service/corrida-service.service';

@Component({
  selector: 'app-corrida-lista',
  standalone: true,
  imports: [],
  templateUrl: './corrida-lista.component.html',
  styleUrl: './corrida-lista.component.css'
})
export class CorridaListaComponent {

  //LISTA DE CORRIDAS
  listaCorridas = signal<Corrida[]>([])

  //CONSTRUTOR
  constructor(private corridaService: CorridaServiceService){}

  //EXECUTA QUANDO O COMPONENTE É CARREGADO
  ngOnInit(){
    this.listar()
  }

  //LISTAR CORRIDAS
  listar(){

    this.corridaService.listarCorridas()
      .subscribe({

        next: (dadosCorridas) => {

          this.listaCorridas.set(dadosCorridas)

          console.table(this.listaCorridas())

        },

        error: (msgErro) => {

          console.log(
            'ERRO AO LISTAR CORRIDAS: ',
            msgErro
          )

        }
      })   

  }

    excluir(id: number) {

      if (confirm('Deseja excluir esta corrida?')) {
    
        this.corridaService.removerCorrida(id)
          .subscribe({
    
            next: (resposta) => {
    
              console.log('CORRIDA EXCLUÍDA COM SUCESSO!', resposta)
    
              //ATUALIZA A LISTA DEPOIS DA EXCLUSÃO
              this.listar();
    
            },
    
            error: (msgErro) => {
    
              console.log('ERRO AO EXCLUIR CORRIDA:', msgErro)
    
            }
    
          })
  
    }
  
  }

  inscrever(id: number) {

    console.log('INSCRIÇÃO NA CORRIDA:', id);

}

}