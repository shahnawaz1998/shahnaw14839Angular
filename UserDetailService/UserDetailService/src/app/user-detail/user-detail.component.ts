import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  user!: {name: string,job: string, gender: string,country: string,age: number }
  

  constructor(private userService:UserService){}

 ngOnInit(){
    // this.userService.onShowDetailsClicked.subscribe((data:{name:string,job:string,gender:string,country:string,age:number})=>{
    //   this.user = data;
    // })

    this.userService.mySubject.subscribe((data:any)=>{
      this.user = data;
    })
 }
}
