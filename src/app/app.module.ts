import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { DirectoryComponent } from './directory/directory.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // DirectoryComponent,
    HeaderComponent,
    AboutComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
