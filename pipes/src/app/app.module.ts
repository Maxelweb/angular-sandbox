import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';

registerLocaleData(localeIt);
@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
