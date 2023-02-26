import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Observable } from "rxjs";
import { Stefamon } from "src/app/models/Stefamon";

@Injectable({
  providedIn: "root",
})
export class StefamonService {
  readonly apiURL: string;

  constructor(private $http: HttpClient) {
    this.apiURL = "http://localhost:8080/api";
  }

  listarTodos() {
    return this.$http.get<Stefamon[]>(`${this.apiURL}/stefamon/todos`);
  }
}
