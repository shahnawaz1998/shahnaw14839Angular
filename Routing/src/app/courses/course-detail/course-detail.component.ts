import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit,OnDestroy {
  selectedCourse!:Course;
  courseId:number=0;

  courseService:CourseService = inject(CourseService);
  activateRoute:ActivatedRoute = inject(ActivatedRoute);
  paramMapObs:any;

  ngOnInit(){
    // this.courseId = this.activateRoute.snapshot.params['id'];

    //When we click on Next and Previous buttons the snapshot parameter does got catch the updated value hence we are commenting this and using observables

    // this.courseId =  +this.activateRoute.snapshot.paramMap.get('id')!;
    // this.selectedCourse = this.courseService.courses.find(course=> course.id === this.courseId)!

    this.paramMapObs = this.activateRoute.params.subscribe((data)=>{ // We can do same using Parammap 
      this.courseId = +data['id'];
      this.selectedCourse = this.courseService.courses.find(course=> course.id == this.courseId)!
    })
  }

  ngOnDestroy(){
      this.paramMapObs.unsubscribe();
  }
}
