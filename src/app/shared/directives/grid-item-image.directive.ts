import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit{
  @Input() appGridItemImage = '2rem';
  @Input() fitModer = 'covert';
  constructor(private elr:ElementRef, private rd2:Renderer2) {}
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image' );
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage );
    this.rd2.setStyle(this.elr.nativeElement, 'hight', this.appGridItemImage );
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitModer);
  }

}
