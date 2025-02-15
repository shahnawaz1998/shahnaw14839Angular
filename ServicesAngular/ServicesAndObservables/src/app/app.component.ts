import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,AdduserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService,LoggerService]
})
export class AppComponent implements OnInit {
  title = 'ServicesAndObservables';
  users:{name:string,status:string}[] = [];

  constructor(private userService:UserService,private loggerService:LoggerService){

  }
  ngOnInit(){
     this.users = this.userService.users;

  }
}
