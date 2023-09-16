import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getAnswer().then(res=>res.json()).then(res=>this.getPro(res))
    console.log(this.data)

  }

  getPro(d:any){
    this.data=d
    console.log(this.data)
  }

  editPage(e:any){
    this.r.navigate(['userpolicecomplaintedit',e.target.id])
  }

  deleteProo(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteProducts(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      this.r.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.r.navigate(['complaintofficialdisplay']);
    });
    }).catch(res=>alert(res.error))
  }



}
