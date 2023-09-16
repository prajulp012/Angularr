import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeo',
  templateUrl: './homeo.component.html',
  styleUrls: ['./homeo.component.css']
})
export class HomeoComponent {

  data:any;

  constructor(private ds:DataService, private r:Router){

    this.ds.getProduct().then(res=>res.json()).then(res=>this.getPro(res))
    console.log(this.data)

  }

  getPro(d:any){
    this.data=d
    console.log(this.data)
  }

  editPage(e:any){
    this.r.navigate(['userofficialcomplaintedit',e.target.id])
  }

  deletePro(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteProduct(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      this.r.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.r.navigate(['userofficialcomplaintdisplay']);
    });
    }).catch(res=>alert(res.error))
  }

  

  

}
