import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit() {
    this._produtoService.getAll().subscribe(suc => {this.produtos = suc});
  }

}
