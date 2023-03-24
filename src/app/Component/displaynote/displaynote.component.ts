import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/Data/data.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  filterNote:any;
  constructor(public dialog:MatDialog, private data:DataService) { }
  @Input() noteslist:any;
  @Output() displayToGetAllNoteEvt = new EventEmitter<string>();  //Eventname(objname)=new classname ==Child to parent
  @Output() updateEvent =new EventEmitter<string>();
  @Input() trash:any;
  message : any;
  
  ngOnInit(): void {
    this.data.incomingData.subscribe((Response)=>
    {
      console.log("Search In Progress",Response);
      this.filterNote=Response;
    })   
  }
  EditNoteDialogBox(notes:any)
  {
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'45%',
      height:'auto',
      data:notes 
    })
    dialogbox.afterClosed().subscribe(Response=>{
      console.log("After Update",Response);
      this.displayToGetAllNoteEvt.emit(Response);
      this.updateEvent.emit(Response);
    });
  }
  receiveMessage($event:any)
  {
    console.log("Icons To Display"+$event);
    this.message=$event;
    this.displayToGetAllNoteEvt.emit(this.message);
  }
}