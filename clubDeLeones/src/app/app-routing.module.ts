import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCitasComponent } from './citas/main-citas/main-citas.component';
import { MainContactoComponent } from './contacto/main-contacto/main-contacto.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'citas', component: MainCitasComponent },
  { path: 'contacto', component: MainContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
