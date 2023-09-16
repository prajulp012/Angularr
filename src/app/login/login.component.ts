import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private fb:FormBuilder, private ds:DataService, private r:Router) {}

  logForm = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  submitted(){
    let user = this.logForm.controls.username.value
    let pswd = this.logForm.controls.password.value
    console.log(user,pswd)

    this.ds.signin(user,pswd).then(res=>res.json()).then(res=>{
      if(res['token']){
        console.log(res)
        localStorage.setItem('token',res['token'])
        alert("Login Successful!!!")
        this.r.navigate(['userhome'])
      }
      else{
        alert('Login Failed.Invalid Username or Password')
      }
      
    }).catch(res=>alert("Login Failed!!!"))
  }

}
