import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  constructor(private note: NoteService) { }
  trash=true;
  notesArray:any;
  
  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes()
  {
    this.note.GetAllNotes().subscribe((response:any)=>
    {
      console.log(response);
      this.notesArray=response.data;
      console.log("Stored In Array");
      console.log(this.notesArray);
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((result:any)=>{
        return result.trash==true;
      })
    })
  }
  receiveMessage($event:any){
    console.log("Inside Get All Notes",$event);
    this.GetAllNotes();
  }
}
