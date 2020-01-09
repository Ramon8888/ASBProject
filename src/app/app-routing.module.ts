import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import { NavegacionComponent } from './navegacion/navegacion.component' ;
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component' ;
import { HomeComponent } from './home/home.component' ;
import { AppmobileComponent } from './home/appmobile/appmobile.component' ;
import { CommunityComponent } from './home/community/community.component' ;
import { DashboardComponent } from './home/dashboard/dashboard.component' ;
import { StoreComponent } from './home/store/store.component' ;
import { TranningComponent } from './home/tranning/tranning.component' ;
import { WebsiteComponent } from './home/website/website.component' ;
import { FooterComponent } from './footer/footer.component' ;
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component' ;
import { ProjectMenuComponent } from './project-menu/project-menu.component' ;

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent } ,
  { path: 'login' , component: LoginComponent } ,
  { path: 'navegacion' , component: NavegacionComponent },
  { path: 'registro-usuarios' , component: RegistroUsuariosComponent },
  { path: 'footer' , component: FooterComponent },
  { path: 'appmobile' , component: AppmobileComponent },
  { path: 'community' , component: CommunityComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'tranning' , component: TranningComponent },
  { path: 'website' , component: WebsiteComponent },
  { path: 'store' , component: StoreComponent },
  { path: 'recovery-pass' , component: RecoveryPassComponent },
  { path: 'project-menu' , component: ProjectMenuComponent }
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
