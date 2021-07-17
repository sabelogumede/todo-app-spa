import { Directive, AfterViewInit, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  color = "yellow"

  @Input() appAutofocus = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.style.backgroundColor = this.color;
  // }

}
