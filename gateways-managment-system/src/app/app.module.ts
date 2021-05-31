import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BASE_URL } from './api/variables';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.baseApiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
