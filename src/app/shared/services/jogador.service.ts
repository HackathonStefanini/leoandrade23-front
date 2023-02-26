import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Jogador } from "src/app/models/Jogador";

@Injectable({
  providedIn: "root",
})
export class JogadorService {
  readonly apiURL: string;

  constructor(private $http: HttpClient) {
    this.apiURL = "http://localhost:8080/api";
  }

  salvarJogador(jogador: Jogador) {
    return this.$http.post(`${this.apiURL}/jogador`, jogador);
  }
}
