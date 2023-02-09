import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelDetailRoutingModule } from './hotel-detail-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotelDetailRoutingModule
  ]
})
export class HotelDetailModule implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }
 }
