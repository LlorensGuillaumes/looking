import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHotelRoutingModule } from './edit-hotel-routing.module';
import { EditHotelComponent } from './edit-hotel.component';


@NgModule({
  declarations: [
    EditHotelComponent
  ],
  imports: [
    CommonModule,
    EditHotelRoutingModule
  ]
})
export class EditHotelModule implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }
 }
