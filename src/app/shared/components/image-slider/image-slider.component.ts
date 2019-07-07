import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() IntervalByTimeSecond = 2;
  @ViewChild('imageSlider', {static: true}) imageSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  intervalId;
  selectedIndex = 0;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
     console.log('ngOnInit', this.imageSlider);
  }
  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement ,
         'scrollLeft' ,
          (this.getIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.IntervalByTimeSecond * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleImgScroll( ev: any) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
