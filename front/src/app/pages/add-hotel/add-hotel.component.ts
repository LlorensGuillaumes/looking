import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss'],
})
export class AddHotelComponent implements OnInit {
  hotelForm!: FormGroup;
  hotel!: Ihotel;
  submitted: boolean = false;
  public listado: string[] = [];

  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.hotelForm = this.form.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      imageDetail: [[''], [Validators.required]],
      enlace: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      stars: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      pricePerNight: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
    });

    this.hotelForm.valueChanges.subscribe((data) => {
      this.hotel = data;
    });
  }

  addHotel() {
    let newHotel: Ihotel = this.hotel;
console.log(newHotel);
    newHotel.imageDetail = this.listado;
    

    this.api.postComic(newHotel).subscribe((response) => {
      this.hotelForm.reset();
      this.route.navigate(['/hotels']);
    });
  }

  addImageDetail(imagen: any) {
    this.listado.push(imagen.imagen);
  }
}
