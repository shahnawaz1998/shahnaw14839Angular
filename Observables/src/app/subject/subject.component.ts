import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
  obs = ajax('https://randomuser.me/api/')
  sub = new Subject()
  ngOnInit():void{

    //Here we subscribed to observable three time and its return different values all time.
    // this.obs.subscribe((data)=>{
    //   console.log(data)
    // })
    // this.obs.subscribe((data)=>{
    //   console.log(data)
    // })
    // this.obs.subscribe((data)=>{
    //   console.log(data)
    // })

    this.obs.subscribe(this.sub)//Subject here is a consumer hence its called as multicaste
    // console.log(this.sub)
    this.sub.subscribe((data)=>{
      console.log(data);
      
    })
    this.sub.subscribe((data)=>{
      console.log(data);
      
    })
    this.sub.subscribe((data)=>{
      console.log(data);
      
    })
  }
}
