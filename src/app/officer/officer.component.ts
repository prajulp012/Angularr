import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent {

  constructor (private fb:FormBuilder, private ds:DataService, private r:Router) {}

  adminForm = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  submitted(){
    let user = this.adminForm.controls.username.value
    let pswd = this.adminForm.controls.password.value
    console.log(user,pswd)

    this.ds.admin(user,pswd).then(res=>res.json()).then(res=>{
      if(res['token']){
        console.log(res)
        localStorage.setItem('token',res['token'])
        alert("Login Successful!!!")
        this.r.navigate(['complaintofficialdisplay'])
      }
      else{
        alert('Login Failed.Invalid Username or Password')
      }
      
    }).catch(res=>alert("Login Failed!!!"))
  }

}
