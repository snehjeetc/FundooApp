import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public colorPalette: any[] = [
    [
      { color: '#fff' },
      { color: '#f28b82' },
      { color: '#fbbc04' }
    ],
    [
      { color: '#fff475' },
      { color: '#ccff90' },
      { color: '#a7ffeb' }
    ],
    [
      { color: '#cbf0f8' },
      { color: '#aecbfa' },
      { color: '#d7aefb' }
    ]
  ]

  @Input() noteCard: any;
  @Output() refreshRequest = new EventEmitter<any>();
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  archiveNote() {
    let data = {
      noteIdList: this.noteCard.id,
      isArchived: true
    };
    this.noteService.addToArchive(data).subscribe((response: any) => {
      console.log(response);
      this.refreshRequest.emit({ refresh: true, message: 'archived' });
    }, (error) => {
      console.log(error);
    })
  }

  deleteNote() {
    let data = {
      noteIdList: this.noteCard.id,
      isDeleted: true
    };
    this.noteService.addToTrash(data).subscribe((response: any) => {
      console.log(response);
      this.refreshRequest.emit({ refresh: true, message: 'deleted' });
    }, (error) => {
      console.log(error);
    })
  }

}
