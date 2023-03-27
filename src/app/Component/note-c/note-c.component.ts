import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-note-c',
  templateUrl: './note-c.component.html',
  styleUrls: ['./note-c.component.scss']
})
export class NoteCComponent implements OnInit {
  Notearray:any;
  constructor(private note: NoteService){}

  ngOnInit(): void {
    this.OnSubmit();
  }

  OnSubmit(){
    this.note.GetAllNotes().subscribe((response:any)=>
    {
      console.log(response);
      this.Notearray=response.data;
      console.log("Stored In Array");
      console.log(this.Notearray);
      this.Notearray.reverse();
      this.Notearray=this.Notearray.filter((result:any)=>{
        return result.trash==false && result.archiveNote==false;
    })
  })
  }
  receiveMessage($event:any){
    console.log("getnote"+$event)
    this.OnSubmit();
  }

}
