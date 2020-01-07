import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import { NavegacionComponent } from './navegacion/navegacion.component' ;
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component' ;
import { HomeComponent } from './home/home.component' ;
import { FooterComponent } from './footer/footer.component' ;

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent } ,
  { path: 'login' , component: LoginComponent } ,
  { path: 'navegacion' , component: NavegacionComponent },
  { path: 'registro-usuarios' , component: RegistroUsuariosComponent },
  { path: 'footer' , component: FooterComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
