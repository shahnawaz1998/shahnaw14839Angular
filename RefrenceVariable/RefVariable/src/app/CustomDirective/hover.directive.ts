import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
        selector:'[appHover]'
    })
export class HoverDirective{

    constructor(private element:ElementRef,private renderer:Renderer2){

    }

    @HostListener('mouseenter')
    onmouseHover(){
        this.renderer.setStyle(this.element.nativeElement,'margin','10px 5px');
        this.renderer.setStyle(this.element.nativeElement,'padding','20px 10px');
        this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
    }

    @HostListener('mouseleave')
    onmouseOut(){
        this.renderer.setStyle(this.element.nativeElement,'margin','0px 0px');
        this.renderer.setStyle(this.element.nativeElement,'padding','0px 0px');
        this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
    }

}