import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeoff',
  templateUrl: './homeoff.component.html',
  styleUrls: ['./homeoff.component.css']
})
export class HomeoffComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getProductss().then(res=>res.json()).then(res=>this.getPros(res))
    console.log(this.data)

  }

  getPros(d:any){
    this.data=d
    console.log(this.data)
  }


}
