import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {


  @Input() notesArray: any[]
  constructor(private userservice: UserService) {
  }

  ngOnInit(): void {
    console.log(this.notesArray);
  }

}
