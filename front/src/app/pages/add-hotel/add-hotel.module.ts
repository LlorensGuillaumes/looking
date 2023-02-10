
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHotelRoutingModule } from './add-hotel-routing.module';
import { AddHotelComponent } from './add-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHotelComponent
  ],
  
  imports: [CommonModule, AddHotelRoutingModule, ReactiveFormsModule],
})
export class AddHotelModule implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
