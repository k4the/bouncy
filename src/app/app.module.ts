import { WhyNotComponent } from './why-not/why-not.component';
import { WhyComponent } from './why/why.component';
import { AppRoutes } from './app.routing';
import { WhatComponent } from './what/what.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreWhyComponent } from './more-why/more-why.component';
import { FutureComponent } from './future/future.component';
import { RefsAndInspirationComponent } from './refs-and-inspiration/refs-and-inspiration.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HistoryComponent,
    AppComponent,
    HeaderComponent,
    WhatComponent,
    PageNotFoundComponent,
    WhyComponent,
    WhyNotComponent,
    MoreWhyComponent,
    FutureComponent,
    RefsAndInspirationComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
