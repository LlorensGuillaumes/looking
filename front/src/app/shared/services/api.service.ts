import { Ihotel } from './../../interfaces/ihotel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = 'http://localhost:3000/hotels'
  hotel: Ihotel = {
    id: 0,
    name: '',
    image: '',
    imageDetail: [],
    enlace: '',
    description: '',
    ubication: '',
    stars: 0,
    rating: 0,
    pricePerNight: 0,
    capacity: ''
  }
  id: number = 0;
  
  constructor(private http:HttpClient) {  }
  
  getHotels () {
    return this.http.get(this.url)
  }
  getHotelsById (id: number) {    
    return this.http.get(this.url+'/'+id)
  }
  
  postHotel(hotel: Ihotel){
    return this.http.post(this.url, hotel);
  }

  putHotel(hotel: Ihotel) {
    return this.http.put(this.url+'/'+hotel.id, hotel);
  }
  
  deleteHotel(id: number) {
    console.log(id);
    
    return this.http.delete(this.url+'/'+id);
  }

  
  setHotel(hotels: Ihotel, id: number) {
    console.log('hola');
    
    this.hotel = hotels;
    this.id = id;
    
  }
}
