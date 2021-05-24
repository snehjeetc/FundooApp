import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpservice: HttpService) { }

  createNote(data: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpservice.Post('notes/addNotes', data, options);
  }

  getAllNotes() {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.Get('notes/getNotesList', options);
  }

  updateNotes(note: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.Post('notes/updateNotes', note, options);
  }
}
