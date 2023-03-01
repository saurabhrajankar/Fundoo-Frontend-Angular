import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() trashnoteC: any;
  @Output() RefreshEvent = new EventEmitter<string>();
  @Output() updateEvent =new EventEmitter<string>();
  trash:any;
  archiveNote:any;
  
  constructor(private notes: NoteService,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.trash=this.trashnoteC.trash;  //visibal the notes 
    this.archiveNote=this.trashnoteC.archiveNote;
  }
  Colorsarray: Array<any> =
    [
      { code: '#FF0000', name: 'Red' },
      { code: '#00FFFF', name: 'Aqua' },
      { code: '#FFFF00', name: 'Yellow' },
      { code: '#ADFF2F', name: 'GreenYellow'},
      { code: '#C0C0C0', name: 'Silver' },
      { code: '#FF00FF', name: 'Magenta' },
      { code: '#00FF00', name: 'Green' },
      { code: '#FFA500', name: 'Orange' },
      { code: '#FFFFFF', name: 'White' },
      { code: '#0000FF', name: 'Blue' },
    ]
    setColors(color:any)
    {
      let reqData={
        Color:color.name,
        noteID:this.trashnoteC.noteID
      }
      this.notes.UpdateColor(reqData).subscribe((Response:any)=>
      {
        console.log(Response)
        this.RefreshEvent.emit(Response);
      })
    }
  trashnote(){
    this.trash=false;
    this.archiveNote=false;
    let reqData={
      noteID: [this.trashnoteC.noteID],
    }
    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.RefreshEvent.emit(Response);
    })
    this.snackbar.open("Note Trashed SuccessFully", '', { duration: 2000 });
  }
  restorenote() {
    this.trash=true;
    let reqData = {
      noteID: [this.trashnoteC.noteID],
    }
    console.log(reqData);
    this.notes.TrashNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.RefreshEvent.emit(Response);
    })
    this.snackbar.open("Note Restored SuccessFully", '', { duration: 2000 });
  }
  deletenote() {
    let reqData = {
      noteID: [this.trashnoteC.noteID],
    }

    console.log(reqData);
    this.notes.DeleteNote(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.RefreshEvent.emit(Response);
    })
    this.snackbar.open("Note Deleted SuccessFully", '', { duration: 2000 });
  }
  archivenote()
  {
    
    let reqData = {
      noteID: [this.trashnoteC.noteID],
    }
    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.RefreshEvent.emit(Response);
    })
    this.snackbar.open("Note Archived SuccessFully", '', { duration: 2000 });
  }

  unarchivenote() {
    
    let reqData = {
      noteID: [this.trashnoteC.noteID],
    }
    console.log(reqData);
    this.notes.ArchiveNotes(reqData).subscribe((Response: any) => {
      console.log(Response);
      this.RefreshEvent.emit(Response);
    })
    this.snackbar.open("Note UnArchived SuccessFully", '', { duration: 2000 });
  }

}