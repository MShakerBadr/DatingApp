import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
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
  faCoffee =faCoffee  

  constructor(private _accountService: AccountService,private _toast:ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this._accountService.register(this.model).subscribe(res => {
      console.log(this.model);
      this.cancel();
    }, error => {
      this._toast.error(error.error );
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);

  }
}
