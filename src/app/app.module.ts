import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component/menu.component';
import { ImageStackComponent } from './image.stack/image.stack.component';
import { CardsComponent } from './cards/cards.component';
import { WaveButtonComponent } from './buttons/wave.button.component';
import { ScrollEventDirective } from './scroll.directive';
import { MasterService } from './master.service';

import { HomeComponent } from './home.component/home.component';
import { Page404Component } from './page404/page.404.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageStackComponent,
    CardsComponent,
    WaveButtonComponent,
    ScrollEventDirective,
      HomeComponent,
      Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
