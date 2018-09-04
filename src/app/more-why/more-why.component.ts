import { Component, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-more-why',
  templateUrl: './more-why.component.html',
  styleUrls: ['./more-why.component.scss']
})
export class MoreWhyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }
}
