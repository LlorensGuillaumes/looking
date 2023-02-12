import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }
 }
