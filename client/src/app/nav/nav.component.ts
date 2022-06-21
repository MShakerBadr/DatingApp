import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
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

  constructor(public _accountService: AccountService
    , private _router:Router
    ,private _toastr:ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    this._accountService.login(this.model).subscribe(res => {
      this.user = res;
      this._router.navigateByUrl('/members');
    }, error => {
      this._toastr.error(error.error);
      console.log(error);
    });
  }

  logOut() {
    this._accountService.logOut();
    this._router.navigateByUrl('/')
  }




}
