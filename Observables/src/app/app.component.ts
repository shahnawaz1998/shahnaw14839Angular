import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {from, Observable, of} from 'rxjs';
import { SubjectComponent } from './subject/subject.component';

@Component({
  selector: 'app-root',
  imports: [SubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Observables';
  arr1=[1,2,3,4,5]
  arr2=["A","B","C","D"]
  //Type 1 to create Observable
  myObservables = new Observable((observer)=>{
    observer.next("1")
    observer.next("2")
    observer.next("3")
    // observer.error(new Error("Something Went wrong"));
    observer.next("4")
    observer.next("5")
    observer.complete()
  })

  //Type2 to create Observable using Create() method
  myObservablesType2 = Observable.create((observer:any)=>{
    observer.next('A')
    observer.next('B')
    observer.next('c')
    observer.error(new Error("Error in Observable Type 2."))
    observer.next('D')
    observer.complete()// if error occurs in observable than complete() will never run

  })

  //Observable with of() method with any data type as argument example we suer array of string and number and some string values.
  // it emit complete callback function as default in subscribe we dont need to it explicitly
  myOfObservable = of(this.arr1,this.arr2,'Sam',"Raj");

  //IT only take parameter which are iterable and itterate each element eg. [1,2,3,4] OP:1,2,3,4 
  // We can also pass promise to convert it into observable as paramter
  myfromObservable = from([...this.arr1,...this.arr2])

  myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([10,20,30])
    },3000)
  })
  
  MyPromiseObservable = from(this.myPromise)
  ngOnInit(){
  //   this.myObservables.subscribe((val)=>{
  //     console.log(val);
  //   },
  //   (error:any)=>{alert(error.message)},
  //   ()=>{
  //     alert("Observale emitter all values")
  //   }
  // )

//   this.myObservablesType2.subscribe((val:any)=>{
//     console.log(val)
//   },
//   (error:any)=>{
//     alert(error.message)
//   },
//   ()=>{
//     console.log("completed myObservableType2")
//   }
// ) 

//   this.myOfObservable.subscribe((value)=>{
//     console.log(value);
//   },
//   (error)=>{
//     alert(error?.message)
//   },()=>{
//     alert("Completed of method observables values")
//   }
// )

// this.myfromObservable.subscribe((value)=>{
//   console.log(value)
// },
// (error)=>{
//   alert(error?.message)
// },()=>{
//   alert("Completed From method observables values")
// })
  
  this.MyPromiseObservable.subscribe((value)=>{
    console.log(value)
  },
  (error)=>{
    alert(error?.message)
  },()=>{
    alert("Completed From method observables values")
  })
  
}

}
