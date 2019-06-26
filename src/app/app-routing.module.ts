import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component' 
import { AppareilComponent } from './appareil/appareil.component' 
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component' 


const routes: Routes = [
  { path: 'appareils', component: AppareilComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },  
];

@NgModule({
	declarations: [
	AppareilViewComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
