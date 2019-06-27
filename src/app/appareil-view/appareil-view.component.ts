import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  isAuth = false;

  constructor(private appareilService: AppareilService) {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 1
  	);
  }

  ngOnInit() {
  	this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      });
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  };

  onEteindre() {
    if(confirm('Etes vous sur de tout eteindre ?'))
      this.appareilService.switchOffAll();
    else
      return null;
  };

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}