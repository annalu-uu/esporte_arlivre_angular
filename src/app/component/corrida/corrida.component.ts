import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'

})

export class CorridaComponent {

  descricao: string = '';
  dataCorrida: string = '';
  distancia: string = '';

  salvar(): void {
    console.log(this.descricao);
    console.log(this.dataCorrida);
    console.log(this.distancia);
  }

}