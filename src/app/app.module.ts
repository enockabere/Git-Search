import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //declare http module once imported.
    FormsModule

  ],
  providers: [ProfileService], //register my service
  bootstrap: [AppComponent]
})
export class AppModule { }
