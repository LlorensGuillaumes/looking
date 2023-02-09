import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHotelRoutingModule } from './add-hotel-routing.module';
import { AddHotelComponent } from './add-hotel.component';

@NgModule({
  declarations: [AddHotelComponent],
  imports: [CommonModule, AddHotelRoutingModule],
})
export class AddHotelModule implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
