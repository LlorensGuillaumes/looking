import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailComponent,
    HotelsComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
