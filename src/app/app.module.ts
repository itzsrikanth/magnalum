import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component/menu.component';
import { ImageStackComponent } from './image.stack/image.stack.component';
import { CardsComponent } from './cards/cards.component';
import { WaveButtonComponent } from './buttons/wave.button.component';
import { ScrollEventDirective } from './scroll.directive';
import { MasterService } from './master.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageStackComponent,
    CardsComponent,
    WaveButtonComponent,
    ScrollEventDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
