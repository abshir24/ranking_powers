import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerlevel;
 
  constructor() { }

  ngOnInit() {
  }

  showNumber(){
    console.log(this.powerlevel);
  }

}
