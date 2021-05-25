import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title: string;
  description: string;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(private dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public card: any,
    private noteservice: NoteService,
    private _ngZone: NgZone) {

  }

  ngOnInit(): void {
    this.title = this.card.note.title;
    this.description = this.card.note.description;
  }

  onClose() {
    this.dialogRef.close({ 'success': false });
  }

  submit() {
    let note = {
      noteId: this.card.note.id,
      title: this.title,
      description: this.description
    };
    console.log('Updating the note', note);
    this.noteservice.updateNotes(note).subscribe((resp: any) => {
      console.log(resp);
      this.dialogRef.close({ 'success': true });
    }, (error) => {
      console.log(error);
    });
  }



  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
