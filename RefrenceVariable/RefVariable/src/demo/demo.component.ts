import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  Validate(data: HTMLInputElement){
    console.log(data.value);
  }
  @Input() value: string = 'procadem';

  ngOnChanges(change:SimpleChanges){ //first lifecycle to be called and called every time when there is change in @Input() Decorator
    console.log("ngOnChange called!");
    console.log(change)
  }
 
  ngOnInit(){ //Second Life cycle hook to be called and it is called only once in starting of component load
    console.log("ngOnInit called!")
  }

  ngDoCheck(){ // It runs every time the change detection cycle of Angular runs
    console.log("Do Checked is called")
  }

  ngAfterContentInit(){ // it runs after ng-content projected content is called and runs only one time.
    console.log("NgAfterContentInit called")
  }
 
  ngAfterContentChecked() // This is called as ng-content projecte content is called also called in every detection cycle change and called when there is ng-content changes value
{
  console.log("NgAfterContentChecked called")
}

ngAfterViewInit(){
  console.log("AfterViewInit Called!")
}

ngAfterViewChecked() {
    console.log('AfterViewChecked is called!')
  }

  ngOnDestroy() {
    console.log("ONDestroy is called!")
  }
}
