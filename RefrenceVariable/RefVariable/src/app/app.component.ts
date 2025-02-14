import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import {DemoComponent} from '../demo/demo.component'
import { setBackgroundDirective } from './CustomDirective/setBackground.directive';
import { HoverDirective } from './CustomDirective/hover.directive';

@Component({
  selector: 'app-root',
  imports: [DemoComponent,setBackgroundDirective,HoverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RefVariable';
  inputText:string = '';
  destroy=true

  onSubmit(inputElement:HTMLInputElement){
    console.log(inputElement.value)
      this.inputText = inputElement.value;
  }

  DestroyC(){
    this.destroy=false;
  }

  @HostListener('window:resize',['$event'])
  onResizes(event:Event){
    console.log('Window Resized',event)
  }
}
