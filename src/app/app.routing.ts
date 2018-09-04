import { HistoryComponent } from './history/history.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhatComponent } from './what/what.component';
import { WhyComponent } from './why/why.component';
import { WhyNotComponent } from './why-not/why-not.component';
import { MoreWhyComponent } from './more-why/more-why.component';
import { FutureComponent } from './future/future.component';
import { RefsAndInspirationComponent } from './refs-and-inspiration/refs-and-inspiration.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home', name: 'home' } },
  { path: 'history', component: HistoryComponent, data: { state: 'history', name: 'history' } },
  { path: 'what', component: WhatComponent, data: { state: 'what', name: 'what?' } },
  { path: 'why', component: WhyComponent, data: { state: 'why', name: 'why?' } },
  { path: 'why-not', component: WhyNotComponent, data: { state: 'why-not', name: 'why not?' } },
  { path: 'more-why', component: MoreWhyComponent, data: { state: 'more-why', name: 'more why' } },
  // tslint:disable-next-line:max-line-length
  { path: 'refs', component: RefsAndInspirationComponent, data: { state: 'refs', name: 'refs' } },
  { path: 'future', component: FutureComponent, data: { state: 'future', name: 'future' } },
  { path: '**', component: PageNotFoundComponent, data: { state: 'fourOhfour', name: 'four oh four' } }
];

