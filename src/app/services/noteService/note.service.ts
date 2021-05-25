import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpservice: HttpService) { }

  createNote(data: any) {
    let options = this.getOptions();
    return this.httpservice.Post('notes/addNotes', data, options);
  }

  getAllNotes() {
    let options = this.getOptions();
    return this.httpservice.Get('notes/getNotesList', options);
  }

  updateNotes(note: any) {
    let options = this.getOptions();
    return this.httpservice.Post('notes/updateNotes', note, options);
  }

  addToTrash(note: any) {
    let options = this.getOptions();
    return this.httpservice.Post('notes/trashNotes', note, options);
  }

  addToArchive(note: any) {
    let options = this.getOptions();
    return this.httpservice.Post('notes/archiveNotes', note, options);
  }

  private getOptions(): any {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return options;
  }
}
