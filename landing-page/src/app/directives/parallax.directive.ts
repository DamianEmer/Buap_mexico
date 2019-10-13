import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  
  initialTop: number = 0;

  constructor(private elementRef: ElementRef) {
    this.initialTop = this.elementRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.elementRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio))+'px'
  }

}
