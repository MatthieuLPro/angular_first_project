import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})

export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() { }

  getStatus() {
  	return this.appareilStatus;
  }

  getColor() {
  	if (this.appareilStatus === "Eteint")
  		return 'red';
  	else
  		return 'green';
  }

  onSwitch() {
    if (this.appareilStatus === "Allumer")
      return this.appareilService.switchOffOne(this.index);
    else
      return this.appareilService.switchOnOne(this.index);
  }

}
