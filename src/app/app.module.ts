import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//ruteo
import {RouterModule, Routes} from '@angular/router';


import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

//crear array de rutas
//instalar plugin typescript hero
const rutasDeNavegacion: Routes = [
  {path: 'login', component:LoginComponent}, 
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: '**', component:PaginaNoEncontradaComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rutasDeNavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
