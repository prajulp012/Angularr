import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    

  }

  getPro(d:any){
    this.data=d
    console.log(this.data)
  }

 

  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }


}
