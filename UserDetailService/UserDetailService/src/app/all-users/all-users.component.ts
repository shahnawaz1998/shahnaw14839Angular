import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-users',
  imports: [CommonModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  users:{name:string,job:string,gender:string,country:string,age:number}[]=[]

  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.users = this.userService.users;
  }


  ShowDetails(user:{name:string,job:string,gender:string,country:string,age:number}){
    this.userService.showUserDetails(user)
  }
}
