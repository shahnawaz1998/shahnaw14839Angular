import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,AdduserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent implements OnInit {
  title = 'ServicesAndObservables';
  users:{name:string,status:string}[] = [];

  constructor(private userService:UserService){

  }
  ngOnInit(){
     this.users = this.userService.users;

  }
}
