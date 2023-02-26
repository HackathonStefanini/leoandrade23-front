import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Jogador } from "./models/Jogador";
import { JogadorService } from "./shared/services/jogador.service";
import { AuthService } from "./shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  jogador: Jogador = new Jogador();
  jogadorLogin: any;

  constructor(
    private jogadorService: JogadorService,
    private authService: AuthService,
    private router: Router
  ) {}

  title = "hackathon-angular";
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [{ label: "Stefamon", disabled: true }];
  }

  login() {
    this.jogadorService.login(this.jogador).subscribe((jogador) => {
      this.jogadorLogin = jogador;
    });
    if (verificaLogin(this.jogador, this.jogadorLogin)) {
      console.log("Autenticado");
      this.authService.login();
      this.router.navigate(["stefamon"]);
    }
  }
}

function verificaLogin(jogador: Jogador, jogadorLogin: any) {
  if (jogador.nickname == jogadorLogin[0].nickname) {
    if (jogador.password == jogadorLogin[0].password) {
      return true;
    }
  }
  return false;
}
