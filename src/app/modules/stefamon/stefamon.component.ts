import { Component, OnInit } from "@angular/core";
import { Stefamon } from "src/app/models/Stefamon";
import { StefamonService } from "../../shared/services/stefamon.service";

@Component({
  selector: "app-stefamon",
  templateUrl: "./stefamon.component.html",
  styleUrls: ["./stefamon.component.css"],
  providers: [StefamonService],
})
export class StefamonComponent implements OnInit {
  stefamons: Array<Stefamon> = [];

  constructor(private stefamonService: StefamonService) {}

  ngOnInit(): void {
    this.stefamonService.listarTodos().subscribe((stefamons) => {
      this.stefamons = stefamons;
    });
    console.log(this.stefamons);
  }
}
