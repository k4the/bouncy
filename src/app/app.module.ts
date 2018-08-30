import { WhyNotComponent } from './why-not/why-not.component';
import { WhyComponent } from './why/why.component';
import { AppRoutingModule } from './app.routing.module';
import { WhatComponent } from './what/what.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreWhyComponent } from './more-why/more-why.component';
import { FinallyComponent } from './finally/finally.component';
import { RefsAndInspirationComponent } from './refs-and-inspiration/refs-and-inspiration.component';

@NgModule({
  exports: [RouterModule],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    WhatComponent,
    PageNotFoundComponent,
    WhyComponent,
    WhyNotComponent,
    MoreWhyComponent,
    FinallyComponent,
    RefsAndInspirationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
