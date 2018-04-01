import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// Directives
import { 
  ScrollEventDirective,
  MouseWheelDirective,
  SmoothScrollDirective } from './directives/mouse.directive';

// Services
import { MasterService } from './services/master.service';

// recom
import { ImageStackComponent } from './recom/image.stack/image.stack.component';
import { CardsComponent } from './recom/cards/cards.component';
import { WaveButtonComponent } from './recom/buttons/wave.button.component';

// pages
import { HomeComponent } from './home.component/home.component';
// import { MenuComponent } from './pages/menu.component/menu.component';
import { MenuDemandComponent } from './pages/menuDemand/menuDemand.component';
import { Page404Component } from './pages/page404/page.404.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    // Directives
    ScrollEventDirective,
    MouseWheelDirective,
    SmoothScrollDirective,
    // recom
    ImageStackComponent,
    CardsComponent,
    WaveButtonComponent,
    // pages
    HomeComponent,
    // MenuComponent,
    MenuDemandComponent,
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
