import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule implements OnInit{

  constructor(){}
  
  ngOnInit(): void {
    
  }
 }
