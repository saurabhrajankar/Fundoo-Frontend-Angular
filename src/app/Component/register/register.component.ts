import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(private user:UserService) { }   //all the userservice properties trsfer to user

  ngOnInit(): void {
  }
  regform=new FormGroup(
    {
      firstName: new FormControl("",[Validators.required]),
      lastname:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    } 
  )
  regSubmit(){
    console.log(this.regform)
    let reqData={
      firstName:this.regform.value.firstName,
      lastame:this.regform.value.lastame,
      email:this.regform.value.email,
      password:this.regform.value.password
    }
    this.user.Register(reqData).subscribe((Responce:any)=>  // those are compnt use to service so first of all subscribe the mthod
    {
        console.log(Responce.message);
        localStorage.setItem('token',Responce.reqData);
    });

  }
}
