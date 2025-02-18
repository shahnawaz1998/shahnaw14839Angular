import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
  // obs = ajax('https://randomuser.me/api/')
  sub = new Subject()

  myBehaviourSubject = new BehaviorSubject(10)
  ngOnInit():void{

    //Difference Between Subject and Observable

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


    //Multicaste Example of Subject

    // this.obs.subscribe(this.sub)//Subject here is a consumer hence its called as multicaste
    // // console.log(this.sub)
    // this.sub.subscribe((data)=>{
    //   console.log(data);
      
    // })
    // this.sub.subscribe((data)=>{
    //   console.log(data);
      
    // })
    // this.sub.subscribe((data)=>{
    //   console.log(data);
      
    // })



    //Subject
       this.sub.subscribe((data)=>{
      console.log(data);
      
    })
    this.sub.subscribe((data)=>{
      console.log(data);
      
    })
    this.sub.next('Subject')
    this.sub.subscribe((data)=>{
      console.log(data);
      
    })

    //Behaviour Subject
    this.myBehaviourSubject.subscribe((data)=>{
      console.log(data);
    })
    this.myBehaviourSubject.subscribe((data)=>{
      console.log(data);
    })
    this.myBehaviourSubject.next(2020)

    this.myBehaviourSubject.subscribe((data)=>{
      console.log(data);
    })


    //Async Subject

    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.complete();

    asyncSubject.subscribe(data=> console.log(data))
    asyncSubject.subscribe(data=> console.log(data))
    asyncSubject.subscribe(data=> console.log('Sub'+data))
  }
}
