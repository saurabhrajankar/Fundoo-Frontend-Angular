import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  PostService(url:string,payload:any,token:boolean=false, httpOptions:any={}){
    return this.http.post(url,payload, token && httpOptions)
  }
  PutService(url:string,reqData:any,token:boolean=true, httpOptions:any={}){
    return this.http.put(url,reqData, token && httpOptions)
  }
  GetService(url:string,token:boolean=true, httpOptions:any={}){
  return this.http.get(url, token && httpOptions)
  }
  DeleteService(url:string,reqData:any,token:boolean=true, httpOptions:any={}){
  return this.http.delete(url,token && httpOptions)
  }
}
