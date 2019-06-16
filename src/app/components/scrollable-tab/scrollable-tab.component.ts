import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string; // 只读 可以为空
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent {
  constructor() {}

  selectedIndex: number = -1;
  @Input("menus") menus: TopMenu[];
  @Input('backgroundColor') backgroundColor: '#fff'; 
  @Input("activeColor") activeColor='';
  @Input("titleColor") titleColor = '';
  @Input("indicatorColor") indicatorColor= '';
  @Output() tabSelection = new EventEmitter();


  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelection.emit(this.menus[index]);
  }
}