import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpoli',
  templateUrl: './addpoli.component.html',
  styleUrls: ['./addpoli.component.css']
})
export class AddpoliComponent {

  pid:any;
  pro:any={}  
  data:any;

  constructor(private ar:ActivatedRoute,private ds:DataService, private fb:FormBuilder, private r:Router){

    this.ar.params.subscribe(res=>this.pid=res['id'])
    console.log(this.pid)
    this.ds.getDisplayp(this.pid).then(res=>res.json()).then(res=>{
      
      this.getPro(res)
    })
  
    }
    getPro(data:any,){
      this.pro=data
    }


  proForm=this.fb.group({
    reply:''
    

  })

  submitted(){
    
    let t=this.proForm.controls.reply.value
    console.log(t)

    this.ds.updateProductsp(this.pid,t).then(res=>res.json()).then(res=>{
      alert("Replied!")
      this.r.navigate(['complaintpolicedisplay'])
    }).catch(res=>alert("Error!!!"))


}
}
