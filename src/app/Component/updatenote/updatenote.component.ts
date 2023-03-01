import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  title: any;
  descrption: any;
  noteID:any;

  constructor(private notes: NoteService,public dialogbox:MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any)
    {
    this.title=data.title;
    this.descrption=data.descrption;
    this.noteID=data.noteID;
     }

  ngOnInit(): void {
  }
  CloseDialogBox(){
    let reqData = { 
      title : this.title,
      descrption : this.descrption
    }
    this.notes.UpdateNotes(reqData,this.noteID).subscribe((response:any)=>{
      console.log(response); 
    });
    this.dialogbox.close();
  }
}
