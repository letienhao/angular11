import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InputLoginComponent } from './components/input-login/input-login.component';
import { AppRoutingModule } from './app-routing.module';
import { DasboardComponent } from './components/pages/dasboard/dasboard.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { LeftComponent } from './components/pages/left/left.component';
import { MainHeaderComponent } from './components/pages/main-header/main-header.component';
import { MainContentComponent } from './components/pages/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputLoginComponent,
    DasboardComponent,
    HeaderComponent,
    MainComponent,
    LeftComponent,
    MainHeaderComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
