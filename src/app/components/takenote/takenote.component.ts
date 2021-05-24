import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  public title: string;
  public description: string;

  @Output() sendEventToGetAllNotes = new EventEmitter<string>();

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  clicked = false;
  // step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  createNote() {
    this.clicked = !this.clicked;
    let obj = {
      title: this.title,
      description: this.description
    }
    this.userservice.createNote(obj).subscribe((resp: any) => {
      console.log(resp);
      this.sendEventToGetAllNotes.emit();
    }, (error) => {
      console.log(error);
    })
  }

}
