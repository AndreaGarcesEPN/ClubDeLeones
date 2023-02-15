import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainCitasComponent } from './citas/main-citas/main-citas.component';
import { MainContactoComponent } from './contacto/main-contacto/main-contacto.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainCitasComponent,
    MainContactoComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
