import { Component, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }
}
