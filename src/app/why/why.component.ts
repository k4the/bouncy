import { Component, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }
}
