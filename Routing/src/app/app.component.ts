import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CurrencyPipe } from '@angular/common';
import { CourseService } from './Services/course.service';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[CourseService]
})
export class AppComponent {
  title = 'Angular Routing';
}
