import { Component, inject, OnInit, Pipe } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CurrencyPipe,CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CurrencyPipe]
})
export class CoursesComponent implements OnInit{
  // AllCourses: Course[]  | undefined;
  coursesService = inject(CourseService);
  AllCourses:Course[] = this.coursesService.courses;
  activeRoute:ActivatedRoute = inject(ActivatedRoute);
  searchedQuery:any;


ngOnInit(){
  // this.searchedQuery = this.activeRoute.snapshot.queryParams['search'];
 this.activeRoute.queryParamMap.subscribe((value:any)=>{ //We added this because if we have event on same page which changes the queryParamMap than observable queryParam will catch that and filter it out
    this.searchedQuery = value.get('search');
    if(this.searchedQuery == '' || this.searchedQuery == undefined ){
      this.AllCourses = this.coursesService.courses;
    }else{
      this.AllCourses = this.coursesService.courses.filter(x=>x.title.toLowerCase().includes(this.searchedQuery.toLowerCase()))
    }
  })
  
}

}
