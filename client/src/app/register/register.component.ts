import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_Services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this._accountService.register(this.model).subscribe(res => {
      console.log(this.model);
      this.cancel();
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);

  }
}
