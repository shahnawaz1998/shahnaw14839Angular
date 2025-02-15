import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

  constructor(private userService:UserService){

  }

  username:string='';
  status:string='activate';

  AddUser(){
    this.userService.addNewUser(this.username,this.status);
    // console.log(this.userService.users);
    
  }
}
