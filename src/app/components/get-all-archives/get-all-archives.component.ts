import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-archives',
  templateUrl: './get-all-archives.component.html',
  styleUrls: ['./get-all-archives.component.scss']
})
export class GetAllArchivesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  archive() {
    // let data = {
    //   // cardidList:this.cardId,
    //   noteIdList: [this.card.id],
    //   isArchived: this.isArchived,
    // }
  }

}
