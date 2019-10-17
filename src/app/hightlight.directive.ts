import { Directive,ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  //@Input('appHightlight') hightlight;
  constructor(private el:ElementRef) { 
    
  }
  @Input('appHightlight') set hightlight(color){
    this.el.nativeElement.style.backgroundColor=color;
  }
}