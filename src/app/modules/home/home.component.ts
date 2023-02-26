import { Component, OnInit } from "@angular/core";
import { Jogador } from "src/app/models/Jogador";
import { JogadorService } from "src/app/shared/services/jogador.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  jogador: Jogador = new Jogador();

  constructor(private jogadorService: JogadorService) {}

  ngOnInit(): void {}

  salvarJogador() {
    this.jogadorService.salvarJogador(this.jogador).subscribe();
  }
}
