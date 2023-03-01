import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notesArray:any;
  constructor(private note:NoteService) { }

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
        return result.archiveNote==true;
      })
    })
  }
  receiveMessage($event:any){
    console.log("Inside Get All Notes",$event);
    this.GetAllNotes();
  }

}

