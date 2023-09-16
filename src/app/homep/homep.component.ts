import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['./homep.component.css']
})
export class HomepComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getProducts().then(res=>res.json()).then(res=>this.getProo(res))
    console.log(this.data)

  }

  getProo(d:any){
    this.data=d
    console.log(this.data)
  }

  editPage(e:any){
    this.r.navigate(['userpedit',e.target.id])
  }


  deleteProp(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteProductp(id).then(res=>res.json()).then(res=>{
      alert("Complaint Delete?")
      this.r.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.r.navigate(['userpolicecomplaintdisplay']);
    });
    }).catch(res=>alert(res.error))
  }

}
