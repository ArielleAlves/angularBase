import { Component } from '@angular/core';
import { Estado } from './entidades/estado'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*
  nomes: string[] = ['João', 'Fernado', 'Eduardo'];
  nomes2: Array<string> = ['Herika', 'Dianna', 'Gabi','Arielle'];
  nomes3: Array('Yuri', 'Felipe', 'Liu');
  nomes5 = new Array<string>(5);
  */

  listaCategoria = new Array<Categoria>();

  categoria : Categoria = new  Categoria();

  adicionar() : void{
    this.listaCategoria.push(this.categoria);
    this.categoria = new Categoria();
  }

  excluir(i:number) : void{
    this.listaCategoria.splice(i,1)
  }

  alterar(i: number) : void{
    this.categoria = this.listaCategoria[i]
    this.listaCategoria.splice(i,1)
  }

}
