import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {

  @HostBinding('style.grid-area') gridArea = 'title';
  @HostBinding('style.font-size') @Input() appGridItemTitle = '12px';

}
