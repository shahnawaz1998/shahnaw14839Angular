import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  imports: [AllUsersComponent,UserDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent {
  title = 'UserDetailService';

  constructor(private userService:UserService){

  }
}
