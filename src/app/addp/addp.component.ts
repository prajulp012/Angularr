import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addp',
  templateUrl: './addp.component.html',
  styleUrls: ['./addp.component.css']
})
export class AddpComponent {

  file:any;

  constructor(private fb:FormBuilder, private ds:DataService, private r:Router){}

  proForm=this.fb.group({
    title:['',[Validators.required]],
    complaint:['',[Validators.required]],

  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }

  submitted(){
    console.log(this.proForm.value)
    // console.log(this.file)
    let n:any=this.proForm.controls.title.value
    let p:any=this.proForm.controls.complaint.value

    let formd=new FormData()
    formd.append('title',n)
    formd.append('complaint',p)
    formd.append('image',this.file,this.file.name)


    this.ds.addProducts(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert("Complaint Added")
        this.r.navigate(['userpolicecomplaintdisplay'])
      }
      else{
        alert("Something Wrong")
      }
    })
  }

}
