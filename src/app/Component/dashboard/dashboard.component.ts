import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private data:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  search(event :any){
    console.log(event.target.value)
    this.data.outgoingData(event.target.value)
  }
  Logout(){
    localStorage.removeItem("token");
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }

}