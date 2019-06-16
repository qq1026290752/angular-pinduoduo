import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterContentInit } from '@angular/core';

export interface TopMenu {
  title:string;
  readonly link?:string;//只读 可以为空
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit,OnChanges,AfterContentInit{


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("組件輸入屬性改變",changes)
  }
  //组件构造器被先调用
  constructor(){
    console.log("組件構造器被调用")
  }
  //组件初始化完成，在这个函数中，我们可以安全使用组件
  ngOnInit(): void {
    console.log("组件进行初始化")
  }
  //組件内容初始化的時候
  ngAfterContentInit(): void {
    console.log('組件内容初始化的時候');
  }


  selectedIndex:number = -1;
  @Input("menus") menus:TopMenu[];
  @Input('backgroundColor') backgroundColor: '#fff'; 
  @Input("activeColor") activeColor='';
  @Input("titleColor") titleColor = '';
  @Input("indicatorColor") indicatorColor= '';
  @Output() tabSelection = new EventEmitter();


  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelection.emit(this.menus[index]);//发送事件到使用者
  }
}