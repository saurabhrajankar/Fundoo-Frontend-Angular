import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  base=environment.baseUrl;
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') } 
  AddNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.PostService(this.base+'Note/CreateNote',reqData,true,header);
  }
  GetAllNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.GetService(this.base+'Note/GetAllNotes',true,header);
  }
  UpdateNotes(reqData:any,noteID:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PutService(this.base+'Note/UpdateNotes?Noteid='+noteID,reqData,true,header);
  }
  TrashNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.PutService(this.base+'Note/TrashOrNot?NoteId='+reqData.noteID,reqData,true,header);
  }
  DeleteNote(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.DeleteService(this.base+'Note/DeleteNote?NoteId='+reqData.noteID,reqData,true,header);
  }
  ArchiveNotes(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.PutService(this.base+'Note/ArchiveNote?NoteId='+reqData.noteID,reqData,true,header);
  }
  UpdateColor(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.PutService(this.base+'Note/UpdateColor?NoteId='+reqData.noteID+"&Color="+reqData.Color,reqData,true,header);
  }
}

