import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  AllNotes: any[];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {

    this.userservice.getAllNotes().subscribe((resp: any) => {
      console.log(resp.data.data);
      this.AllNotes = resp.data.data;
    }, (error) => {
      console.log(error);
    });
  }

  messageReceived() {
    console.log("Event called from take note");
    this.getAllNotes();
  }

}
