import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/userService/user.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {


  @Input() notesArray: any[]
  @Output() updateSignal = new EventEmitter<string>();

  constructor(private userservice: UserService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.notesArray);
  }


  openDialog(note: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent, {
      minHeight: '200px',
      maxHeight: '600px',
      minWidth: '40%',
      maxWidth: '60%',
      data: { note },
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe((resp: any) => {
      if (resp) {
        if (resp.success)
          this.updateSignal.emit('updated');
      }
    })
  }

  refreshRequestRecieved(event) {
    if (event) {
      if (event.refresh) {
        this.updateSignal.emit('updated');
      }
    }
  }

}
