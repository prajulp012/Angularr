import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complainto',
  templateUrl: './complainto.component.html',
  styleUrls: ['./complainto.component.css']
})
export class ComplaintoComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getComplainto().then(res=>res.json()).then(res=>this.getO(res))
    console.log(this.data)

    

  }

  getO(d:any){
    this.data=d
    console.log(this.data)
  }

  

 


}
