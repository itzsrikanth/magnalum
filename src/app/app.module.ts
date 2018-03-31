import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// recom
import { ImageStackComponent } from './recom/image.stack/image.stack.component';
import { CardsComponent } from './recom/cards/cards.component';
import { WaveButtonComponent } from './recom/buttons/wave.button.component';
import { ScrollEventDirective } from './scroll.directive';
import { MasterService } from './master.service';

// pages
import { HomeComponent } from './home.component/home.component';
import { MenuComponent } from './pages/menu.component/menu.component';
import { Page404Component } from './pages/page404/page.404.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,

    // recom
    ImageStackComponent,
    CardsComponent,
    WaveButtonComponent,
    ScrollEventDirective,

    // pages
    HomeComponent,
    MenuComponent,
      Page404Component,
      AboutUsComponent,
      ProductComponent
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
