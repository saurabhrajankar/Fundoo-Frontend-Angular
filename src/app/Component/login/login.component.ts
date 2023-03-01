import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(private user:UserService,private snack: MatSnackBar,private route:Router) { }

  ngOnInit(): void {   
  }
  loginform=new FormGroup(
    {
      email :new FormControl("",[Validators.email,Validators.required]), 
      password :new FormControl("",Validators.required)
    } 
  )
  loginsubmit(){
    console.log(this.loginform)
    if (this.loginform.valid){
    let reqData={
      email:this.loginform.value.email,
      password:this.loginform.value.password
    }
    this.user.Login(reqData).subscribe((Responce:any)=>
    {
        console.log(Responce.message);
        localStorage.setItem('token',Responce.data);
        this.route.navigateByUrl("/Dashboard/notes")
        this.snack.open('"Login Successfull"','',{
          duration:2000
          
        })
    }, error =>{
      this.snack.open('please enter correct data','',{
        duration:2000
      });
    })
  }

}
}
