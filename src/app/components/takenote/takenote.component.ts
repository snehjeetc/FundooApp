import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  clicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickOutside(event: Event) {
    console.log("Outside event", this.clicked)
    if (this.clicked)
      this.clicked = !this.clicked;
  }
}
