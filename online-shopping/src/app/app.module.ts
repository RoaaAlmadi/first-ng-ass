import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    HomeAndLivingComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
