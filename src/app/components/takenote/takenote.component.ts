import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  public title: string;
  public description: string;

  @Input() clicked: boolean;
  @Output() sendEventToGetAllNotes = new EventEmitter<string>();

  @ViewChild('createCard') card: ElementRef;

  constructor(private noteservice: NoteService,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target === this.card.nativeElement) {
        console.log("Outside");
        console.log(this.card);
        this.clicked = false;
      }
    })
  }

  ngOnInit(): void {
  }

  createNote() {
    this.clicked = !this.clicked;
    let obj = {
      title: this.title,
      description: this.description
    }
    this.noteservice.createNote(obj).subscribe((resp: any) => {
      console.log(resp);
      this.sendEventToGetAllNotes.emit();
    }, (error) => {
      console.log(error);
    })
  }

  insideCard() {
    this.clicked = true;
  }

}
