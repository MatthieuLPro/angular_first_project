import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  isAuth = false;

  constructor(private appareilService: AppareilService) {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 1
  	);
  }

  ngOnInit() {
  	this.appareils = this.appareilService.appareils;
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
}