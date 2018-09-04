import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const body = document.getElementsByTagName('html')[0];
      body.classList.add('future');
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('html')[0];
    body.classList.remove('future');
  }
}
