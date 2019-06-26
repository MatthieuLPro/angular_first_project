import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'First project 100% angular';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 1
  	);
  };

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  };

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