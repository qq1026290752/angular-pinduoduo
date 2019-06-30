import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title' );
  }
  constructor(private elr:ElementRef, private rd2:Renderer2) {}

}
