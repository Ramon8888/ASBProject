import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WebsiteComponent } from './home/website/website.component';
import { StoreComponent } from './home/store/store.component';
import { AppmobileComponent } from './home/appmobile/appmobile.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CommunityComponent } from './home/community/community.component';
import { TranningComponent } from './home/tranning/tranning.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegacionComponent,
    RegistroUsuariosComponent,
    HomeComponent,
    FooterComponent,
    WebsiteComponent,
    StoreComponent,
    AppmobileComponent,
    DashboardComponent,
    CommunityComponent,
    TranningComponent,
    RecoveryPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
