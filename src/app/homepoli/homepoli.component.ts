import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepoli',
  templateUrl: './homepoli.component.html',
  styleUrls: ['./homepoli.component.css']
})
export class HomepoliComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getAnswers().then(res=>res.json()).then(res=>this.getPoliceAnswer(res))
    console.log(this.data)

  }

  getPoliceAnswer(d:any){
    this.data=d
    console.log(this.data)
  }

  editPage(e:any){
    this.r.navigate(['edit',e.target.id])
  }


  delPoliceAnswer(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deletePoliceAnswer(id).then(res=>res.json()).then(res=>{
      alert("Delete Answer?")
      this.r.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.r.navigate(['complaintpolicedisplay']);
    });
    }).catch(res=>alert(res.error))
  }

}
