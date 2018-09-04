import { Component, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-why-not',
  templateUrl: './why-not.component.html',
  styleUrls: ['./why-not.component.scss']
})
export class WhyNotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }
}
