import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

base=environment.baseUrl;
token:any 
  constructor(private httpservice:HttpService) {this.token=localStorage.getItem('token')}
  Login(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this.httpservice.PostService(this.base+'User/UserLogin',reqData,false,header)
  }
  Register(reqData:any)
{
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  return this.httpservice.PostService(this.base+'User/UserRegistration',reqData,false,header)
}
ForgetPass(reqData:any)
{
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  return this.httpservice.PostService(this.base+'User/ForgotPassword?email='+reqData.email,{},false,header)
}
reset(reqData:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token
      })
    }
    return this.httpservice.PutService(this.base+'User/ResetPassword?new_password='+reqData.new_password+'&confirm_password='+reqData.confirm_password,{},true,header)
}
Demo(reqData:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type' :'application/json'
    })
  }
  return this.httpservice.PostService(this.base+'User/UserLogin',reqData,false,header)
}
}
