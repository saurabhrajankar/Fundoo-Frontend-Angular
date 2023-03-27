import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdserviceService {

  constructor() { }
  getTocken(){
    return !!localStorage.getItem('token');

  }
}
