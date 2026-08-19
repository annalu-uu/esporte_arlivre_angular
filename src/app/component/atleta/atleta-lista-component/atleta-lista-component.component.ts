import { Component } from '@angular/core';
import { Atleta } from '../../../models/atleta';
import { AtletaServiceService } from '../../../service/atleta-service.service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.component.html',
  styleUrl: './atleta-lista-component.component.css',
  standalone: true
})

export class AtletaListaComponent {

  //REAGE QUANDO ALGO É ALTERADO
  listaAtletas = signal<Atleta[]>([]);

  constructor(private listaService: AtletaServiceService, private router: Router) { }

 //A PRIMEIRA COISA QUE SERÁ EXECUTADA
  ngOnInit(){
    this.listar()
  }
  
  listar() {
    this.listaService.listarAtletas()
      .subscribe({
        next: (dadosAtletas) => {
         
          this.listaAtletas.set([...dadosAtletas].sort((a, b) => a.nome.localeCompare(b.nome)))

          console.table(this.listaAtletas())
        },
        error: (msgErro) => {
          console.log("Erro ao listar Atletas ", msgErro)
        }
      })

  }

  excluir(id: number) {
    if (confirm("Deseja Excluir o Atleta?")) {
      this.listaService.removerAtleta(id)
        .subscribe({
          next: (resposta) => {
            console.log("Excluído com Sucesso!!", resposta)

            this.listar()
          },
          error: (msgErro) => {
            console.log("Erro ao listar Atletas", msgErro)
          }
        })
    }
  }

  carregaDadosAtletaForm(atleta: Atleta) {
    this.router.navigate(['/cadastroAtleta', atleta.id])

  }

}