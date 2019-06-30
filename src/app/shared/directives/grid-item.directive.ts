import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit{
    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid' );
        this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'` );
        this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center' );
        this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem' );
    }
    constructor(private elr:ElementRef, private rd2:Renderer2) {}
}
