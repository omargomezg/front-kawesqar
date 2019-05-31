import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../core/services/utils.service';
import { UserModel } from '../core/models/user.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: UserModel[];
  constructor(private serviceRole: UtilsService) { }

  ngOnInit() {
    this.serviceRole.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log('ouch!' + error.status);
    });
  }

  changeStatus(event: MatSlideToggleChange, rut: string) {
    this.serviceRole.putUserState({ state: event.checked }, rut).subscribe(data => {
      // Any code
    }, error => {
      console.log('ouch!' + error.status);
    });;
  }

}
