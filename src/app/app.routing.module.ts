import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhatComponent } from './what/what.component';
import { WhyComponent } from './why/why.component';
import { WhyNotComponent } from './why-not/why-not.component';
import { MoreWhyComponent } from './more-why/more-why.component';
import { FinallyComponent } from './finally/finally.component';
import { RefsAndInspirationComponent } from './refs-and-inspiration/refs-and-inspiration.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'what', component: WhatComponent, data: { state: 'what' } },
  { path: 'why', component: WhyComponent, data: { state: 'why' } },
  { path: 'why-not', component: WhyNotComponent, data: { state: 'why-not' } },
  { path: 'more-why', component: MoreWhyComponent, data: { state: 'more-why' } },
  { path: 'refs-and-inspiration', component: RefsAndInspirationComponent, data: { state: 'refs-and-inspiration' } },
  { path: 'finally', component: FinallyComponent, data: { state: 'finally' } },
  { path: '**', component: PageNotFoundComponent, data: { state: 'fourOhfour' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
