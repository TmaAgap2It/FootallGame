import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MailPageComponent } from './pages/mail-page/mail-page.component';
import { MailNavBarComponent } from './components/email/mail-nav-bar/mail-nav-bar.component';
import { MailListComponent } from './components/email/mail-list/mail-list.component';
import { MailListItemComponent } from './components/email/mail-list-item/mail-list-item.component';
import { MailDetailComponent } from './components/email/mail-detail/mail-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MailPageComponent,
    MailNavBarComponent,
    MailListComponent,
    MailListItemComponent,
    MailDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
