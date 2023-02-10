import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent {
  hotelForm!: FormGroup; 
  hotel!: Ihotel;
  submitted: boolean = false;
  constructor(private form: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.hotelForm = this.form.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      imageDetail: [[''], [Validators.required]],
      enlace: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      stars: [, [Validators.required]],
      rating: [, [Validators.required]],
      pricePerNight: [, [Validators.required]],
      capacity: ['', [Validators.required]],
    })
    
  }
  
  editHotel()  {
    console.log('addHotel');
    
  }
  addEditImageDetail() {
    console.log('imageDetail')
  }
}
