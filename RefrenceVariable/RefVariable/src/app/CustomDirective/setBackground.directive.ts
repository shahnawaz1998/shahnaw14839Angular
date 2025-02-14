import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class setBackgroundDirective implements OnInit{

    private element:ElementRef;
    constructor(element:ElementRef,private renderer:Renderer2){
        // element.nativeElement.style.backgroundColor="#C8E6C9";
        this.element = element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor="#C8E6C9";
        this.renderer.setAttribute(this.element.nativeElement,'title',this.element.nativeElement.textContent)
        console.log("Title checked"+this.element.nativeElement.textContent);
        
    }
}