import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(  private _accountService: AccountService) { }

  title = 'The Dating App';
  users: any;

  ngOnInit() {
   
    this.setcurrentUser();
  }
  setcurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this._accountService.setcurrentUser(user);
  }


}
