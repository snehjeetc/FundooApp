import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  AllNotes: any[];
  constructor(private noteservice: NoteService) { }

  clicked = false;

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {

    this.noteservice.getAllNotes().subscribe((resp: any) => {
      console.log(resp.data.data);
      this.AllNotes = resp.data.data.filter(this.noteFilteration);
    }, (error) => {
      console.log(error);
    });
  }

  messageReceived() {
    console.log("Event called from take note");
    this.getAllNotes();
  }

  refreshAfterUpdation(event) {
    if (event === 'updated') {
      console.log('refreshed');
      this.getAllNotes();
    }
    else {
      console.log("update failure");
    }
  }

  collapseTakeNote() {
    this.clicked = false;
  }

  catchClickEvents(event) {
    this.clicked = event;
  }

  private noteFilteration(note): boolean {
    return note.isArchived == false && note.isDeleted == false;
  }

}
