import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url: 'http://localhost:8080/api/produtos';

  constructor(private _httpClient: HttpClient) { }

  public getAll() {
    return this._httpClient.get<Array<Produto>>(this.url);
  }
}
