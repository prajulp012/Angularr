import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaintp',
  templateUrl: './complaintp.component.html',
  styleUrls: ['./complaintp.component.css']
})
export class ComplaintpComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getComplaintp().then(res=>res.json()).then(res=>this.getP(res))
    console.log(this.data)

  }

  getP(d:any){
    this.data=d
    console.log(this.data)
  }


}
