import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOfFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
