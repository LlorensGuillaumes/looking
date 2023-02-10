import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = 'http://localhost:3000/hotels'

  
  constructor(private http:HttpClient) {  }
  
  getHotels () {
    return this.http.get(this.url)
  }
  getHotelsById (id: number) {
    console.log('pepito');
    
    return this.http.get(this.url+'/'+id)
  }
}
