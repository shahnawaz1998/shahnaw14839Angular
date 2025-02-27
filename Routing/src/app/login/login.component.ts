import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild('username')
  username!: ElementRef;
  @ViewChild('password')
  password!: ElementRef;
  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);
  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert("Your are now Logout"+this.authService.isLogged)
      }
    })
  }

  OnLogin(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    const user = this.authService.login(username,password);
    if(user == undefined){
      alert("User does not exist!!")
    }else{
      alert(`You have logged in ${username}`)
      this.router.navigate(['\Courses'])
    }

  }


}
