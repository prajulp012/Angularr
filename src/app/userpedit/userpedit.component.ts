import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userpedit',
  templateUrl: './userpedit.component.html',
  styleUrls: ['./userpedit.component.css']
})
export class UserpeditComponent {

  pid:any;
  pro:any={}
  complaint=''
  title=''
  file:any;

  // pro is used after getting the edit object

  constructor(private ar:ActivatedRoute, private ds:DataService, private fb:FormBuilder, private r:Router){

  this.ar.params.subscribe(res=>this.pid=res['id'])
  console.log(this.pid)
  this.ds.getSpecificProductp(this.pid).then(res=>res.json()).then(res=>{
    this.proForm=this.fb.group({
        title:[`${res.title}`],
        complaint:[`${res.complaint}`],
    })
    this.getPro(res)
  })

  }
  getPro(data:any){
    this.pro=data
  }

  proForm=this.fb.group({
    title:'',
    complaint:'',

  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }


  submitted(){
    console.log(this.proForm.value)
    let title:any=this.proForm.controls.title.value
    let complaint:any=this.proForm.controls.complaint.value

    let formd=new FormData()
      formd.append('title',title)
      formd.append('complaint',complaint)
      if(this.file){
        formd.append('image',this.file,this.file.name)
      }
      this.ds.updateProductp(this.pid,formd).then(res=>res.json()).then(res=>{
        alert("Updated")
        this.r.navigate(['userpolicecomplaintdisplay'])
      })
  }

}
