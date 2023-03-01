import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  @Output() takenote = new EventEmitter<string>();
  display = false;
  ImgOne=true;
  ImgTwo = false;
  token:any
    elborate(){
      this.display = !this.display;
      this.ImgOne=false;
      this.ImgTwo = true;
    }
    constructor(private note:NoteService,private activeRoute: ActivatedRoute) { }
    ngOnInit(): void {
      this.token=this.activeRoute.snapshot.paramMap.get('token');
      console.log(this.token);
    }
    createform=new FormGroup({
      title :new FormControl("",Validators.required), 
      descrption :new FormControl("",Validators.required)
    })
    OnSubmit(){
      this.display = !this.display;
      this.ImgOne= true;
      this.ImgTwo = false;
      if(this.createform.valid)
      {
        let reqData={
          title:this.createform.value.title,
          descrption:this.createform.value.descrption
        }
        console.log(reqData);
        this.note.AddNotes(reqData).subscribe((response:any)=>{
          console.log(response);
          this.takenote.emit(response);
        })
      }
    }
  }
  