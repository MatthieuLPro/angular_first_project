import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component' 
import { AppareilComponent } from './appareil/appareil.component' 
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component'; 
import { FourOfFourComponent } from './four-of-four/four-of-four.component'; 
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },  
  { path: 'not-found', component: FourOfFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
	declarations: [
	AppareilViewComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
