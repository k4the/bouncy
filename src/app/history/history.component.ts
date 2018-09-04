import { Component, OnInit } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit  {

  ngOnInit() {
    setTimeout(() => {
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }
}
