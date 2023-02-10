import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit  {

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
}
