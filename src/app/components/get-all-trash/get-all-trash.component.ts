import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss']
})
export class GetAllTrashComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  getAllTrash() {

  }

}
