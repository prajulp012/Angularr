import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poli',
  templateUrl: './poli.component.html',
  styleUrls: ['./poli.component.css']
})
export class PoliComponent {

  pid:any;
  pro:any={}
  // title=''
  // price=0
  // file:any;

  // pro is used after getting the edit object

  constructor(private ar:ActivatedRoute, private ds:DataService, private fb:FormBuilder, private r:Router){

  this.ar.params.subscribe(res=>this.pid=res['id'])
  console.log(this.pid)
  this.ds.getPoliceComplaints(this.pid).then(res=>res.json()).then(res=>{
    this.proForm=this.fb.group({
        reply:[`${res.reply}`],
    })
    this.getPro(res)
  })

  }
  getPro(data:any){
    this.pro=data
  }

  proForm=this.fb.group({
    reply:'',
    
    
  })


  submitted(){
    console.log(this.proForm.value)
    let t:any=this.proForm.controls.reply.value
    
    

    let formd=new FormData()
      formd.append('reply',t)
      this.ds.updatePoliceAnswer(this.pid,t).then(res=>res.json()).then(res=>{
        alert("Updated")
        this.r.navigate(['home'])
      })
  }

}
