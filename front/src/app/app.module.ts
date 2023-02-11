import { HotelFormComponent } from './shared/components/hotel-form/hotel-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { ApiService } from './shared/services/api.service';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailComponent,
    HotelsComponent,
    NavigatorComponent,
    HotelFormComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
