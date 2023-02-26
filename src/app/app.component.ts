import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Jogador } from "./models/Jogador";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  jogador: Jogador = new Jogador();

  title = "hackathon-angular";
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [{ label: "Stefamon", disabled: true }];
  }

  login() {
    console.log(this.jogador);
  }
}
