import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit, OnChanges {

  public title: string;
  public description: string;

  @Input() clicked: boolean;
  @Output() sendEventToGetAllNotes = new EventEmitter<string>();
  @Output() sendClickingEvent = new EventEmitter<boolean>();

  @ViewChild('createCard') card: ElementRef;

  constructor(private noteservice: NoteService,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target === this.card.nativeElement) {
        console.log("Outside");
        console.log(this.card);
        this.clicked = false;
        this.sendClickingEvent.emit(this.clicked);
      }
    })
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }): void {
    let change: SimpleChange = changes['clicked'];
    this.clicked = change.currentValue;
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

  onClick() {
    this.clicked = !this.clicked;
    this.sendClickingEvent.emit(this.clicked);
  }
}
