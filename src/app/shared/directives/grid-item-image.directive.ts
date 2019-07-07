import { Directive, Renderer2, ElementRef, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  @Input() appGridItemImage = '2rem';
  @Input() fitModer = 'covert';
  /**
   * 样式监听`@HostBinding`
   */
  @HostBinding('style.grid-area') gridArea = 'image';
  @HostBinding('style.width') width = this.appGridItemImage;
  @HostBinding('style.hight') hight = this.appGridItemImage;
  @HostBinding('style.object-fit') fltModel = this.fitModer;

/*   constructor(private elr:ElementRef, private rd2:Renderer2) {}
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image' );
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage );
    this.rd2.setStyle(this.elr.nativeElement, 'hight', this.appGridItemImage );
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitModer);
  } */

  /**
   * 指令监听`@HostListener`
   */
  @HostListener('click', ['$event.target'])
  handldClick(ev: any) {
    console.log(ev);
  }
}
