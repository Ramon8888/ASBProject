import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import {NavegacionComponent } from './navegacion/navegacion.component' ;
import {RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component' ;



const routes: Routes = [
  { path: 'login' , component: LoginComponent } ,
  { path: 'navegacion' , component: NavegacionComponent },
  { path: 'registro-usuarios' , component: RegistroUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
