import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title: string;
  description: string;

  constructor(private dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public card: any) {

  }

  ngOnInit(): void {
    this.title = this.card.note.title;
    this.description = this.card.note.description;
  }

  onClose() {
    this.dialogRef.close({ 'success': false });
  }

  submit() {

  }

}
