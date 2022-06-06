import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  user: User;

  constructor(public _accountService: AccountService) { }

  ngOnInit(): void {

  }

  login() {
    this._accountService.login(this.model).subscribe(res => {
      this.user = res;
    }, error => {
      console.log(error);
    });
  }

  logOut() {
    this._accountService.logOut();
  }




}
