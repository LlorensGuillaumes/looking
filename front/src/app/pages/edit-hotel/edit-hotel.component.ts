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
export class EditHotelComponent implements OnInit {
  hotelForm!: FormGroup; 
  hotel!: Ihotel;
  submitted: boolean = false;
  public id!: number;
  constructor(private form: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    console.log('adios');
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
    this.hotelForm.valueChanges.subscribe((data) => {
      console.log('holas');
      
      console.log(data);
      
      this.hotel = data;

    })
    
  }
  
  editHotel()  {
    this.submitted = true;
    if(this.hotelForm.valid){
      let updatedHotel: Ihotel = this.hotel;
      updatedHotel.id = this.id;
      this.api.putHotel(updatedHotel).subscribe((response) => {
        /* console.log(response); */
        this.hotelForm.reset();
        this.submitted = false;
        this.route.navigate(["/hotels"])
      })
    }
    console.log('addHotel');
    
  }
  addEditImageDetail() {
    console.log('imageDetail')
  }
 
}
