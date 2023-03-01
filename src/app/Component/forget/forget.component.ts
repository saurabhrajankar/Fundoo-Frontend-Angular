import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  forgetform=new FormGroup(
    {
      email :new FormControl("",[Validators.email,Validators.required]), 
    }
  )
  forgetsubmit(){

    if (this.forgetform.valid){
      let reqData = {
        email:this.forgetform.value.email,
      }
      this.user.ForgetPass(reqData).subscribe((Responce:any)=>
      {
          console.log("Reset sucessfully",Responce);
          localStorage.setItem('token',Responce.reqData);
      });

    }
    
  }

}

