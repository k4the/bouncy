import { AppRoutes } from './../app.routing';
import { Component } from '@angular/core';
import { slideDown } from '../animations/slide-down.animation';
import { Router } from '@angular/router';
import { spin } from '../animations/spin.animation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideDown, spin]
})
export class HeaderComponent {
  minBrowserWidth = 760;
  slideDownState = 'open';
  spinState = 'forward';
  appRoutes: any[] = AppRoutes;
  max: number = this.appRoutes.length - 2;
  next: 'next';
  back: 'back';

  constructor(private router: Router, private location: Location) {}

  toggleMenu(event?: any): void {
    if (window.innerWidth < this.minBrowserWidth) {
      this.slideDownState === 'closed'
        ? (this.slideDownState = 'open')
        : (this.slideDownState = 'closed');
    }
  }

  goto(path: string): void {
    this.slideDownState = 'closed';
    this.router.navigate([path]);
  }

  nextPage(): void {
    let path = '';
    let index = 1;
    if (this.location.path() === '') {
      path = '/' + this.appRoutes[1].path;
    } else {
      index = this.getIndex();
      if (index) {
        path = '/' + this.appRoutes[index + 1].path;
      }
    }
    this.spin();
    this.slideDownState = 'closed';
    this.router.navigate([path]);
  }

  backPage(): void {
    let path = '';
    let index = 1;
    if (this.location.path() === '') {
      path = '/' + this.appRoutes[this.max].path;
    } else {
      index = this.getIndex();
      if (index) {
        path = '/' + this.appRoutes[index - 1].path;
      }
    }
    this.spin();
    this.slideDownState = 'closed';
    this.router.navigate([path]);
  }

  spin(): void {
    this.spinState === 'forward'
      ? (this.spinState = 'backward')
      : (this.spinState = 'forward');
  }

  private getIndex(): number {
    const path = this.location.path().substring(1);
    for (let i = 0; i < this.max; i++) {
      if (this.appRoutes[i].path === path) {
        return i;
      }
    }
  }
}
