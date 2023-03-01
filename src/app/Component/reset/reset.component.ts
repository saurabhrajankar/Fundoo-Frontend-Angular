import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  token:any
  constructor(private user:UserService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.token=this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token)
  }
  restform=new FormGroup(
    {
      new_password: new FormControl("",[Validators.required]),
      confirm_password:new FormControl("",[Validators.required])
    }
  )

  restSubmit(){
    console.log(this.restform)
    let reqData={
      new_password:this.restform.value.new_password,
      confirm_password:this.restform.value.confirm_password
    }

    this.user.reset(reqData,this.token).subscribe((Responce:any)=>
    {
        console.log(Responce.message);
        localStorage.setItem('token',Responce.reqData);
    });
  }

}
