import { Component, inject, Pipe } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

  courseService = inject(CourseService)
  router:Router = inject(Router)
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  popularCourses: Course[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    // this.router.navigate(['Courses']) Using navigate() method
    this.router.navigateByUrl('Courses') 
    // this.router.navigate(['Courses'],{relativeTo:this.activeRoute})//Using navigate() method for routing with Relative Path
  }
}
