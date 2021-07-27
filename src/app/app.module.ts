import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SidebarComponent,
    ReposComponent 
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
