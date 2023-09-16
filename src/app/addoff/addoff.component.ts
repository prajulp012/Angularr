import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addoff',
  templateUrl: './addoff.component.html',
  styleUrls: ['./addoff.component.css']
})
export class AddoffComponent {

  pid:any;
  pro:any={}  
  data:any;

  constructor(private ar:ActivatedRoute,private ds:DataService, private fb:FormBuilder, private r:Router){

    this.ar.params.subscribe(res=>this.pid=res['id'])
    console.log(this.pid)
    this.ds.getDisplayyy(this.pid).then(res=>res.json()).then(res=>{
      
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

    this.ds.updateProducts(this.pid,t).then(res=>res.json()).then(res=>{
      alert("Replied!")
      this.r.navigate(['complaintofficialdisplay'])
    }).catch(res=>alert("Error!!!"))

  // console.log(this.file)


}


}
