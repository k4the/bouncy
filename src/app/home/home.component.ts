import { Component, OnInit } from '@angular/core';
import { spin } from '../spin.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [spin]
})
export class HomeComponent implements OnInit {
  spinState = 'forward';
  constructor( private router: Router) {}

  ngOnInit() {}

  gotoPage(): void {
    this.spin();
    this.router.navigate(['/what']);
  }

  spin(): void {
    this.spinState === 'forward' ? this.spinState = 'backward' : this.spinState = 'forward';
  }
}
