import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-finally',
  templateUrl: './finally.component.html',
  styleUrls: ['./finally.component.scss']
})
export class FinallyComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const body = document.getElementsByTagName('html')[0];
      body.classList.add('future');
    }, 0);
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('html')[0];
    body.classList.remove('future');
  }
}
