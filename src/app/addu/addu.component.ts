import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addu',
  templateUrl: './addu.component.html',
  styleUrls: ['./addu.component.css']
})
export class AdduComponent {

  file:any;

  constructor(private fb:FormBuilder, private ds:DataService, private r:Router){}

  proFormm=this.fb.group({
    title:['',[Validators.required]],
    complaint:['',[Validators.required]],

  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }

  submitted(){
    console.log(this.proFormm.value)
    // console.log(this.file)
    let n:any=this.proFormm.controls.title.value
    let p:any=this.proFormm.controls.complaint.value

    let formd=new FormData()
    formd.append('title',n)
    formd.append('complaint',p)
    formd.append('image',this.file,this.file.name)


    this.ds.addProduct(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert("Product added successfully")
        this.r.navigate(['userofficialcomplaintdisplay'])
      }
      else{
        alert("Something Wrong")
      }
    })
  }
}
