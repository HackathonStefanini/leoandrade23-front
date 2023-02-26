import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";
import { StefamonComponent } from "./modules/stefamon/stefamon.component";
import { HomeComponent } from "./modules/home/home.component";

import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [AppComponent, HomeComponent, StefamonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CardModule,
    ButtonModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
