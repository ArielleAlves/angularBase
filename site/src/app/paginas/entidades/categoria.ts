import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class Categoria{
  private nome : string;
  private descricao :  string;

  getNome() : string{
    return this.nome;
  }
  setNome (nome : string ) : void{
    this.nome = nome;
  }

  getDescricao() : string{
    return this.descricao;
  }
  setDescricao(descricao : string) : void{
    this.descricao = descricao;
  }
}
