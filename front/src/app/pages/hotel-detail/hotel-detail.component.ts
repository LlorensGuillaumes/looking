import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public id!: number; 
  public hotelAbout: any;
  

  constructor(private nameActual: ActivatedRoute, private api: ApiService, private route: Router) { }


  ngOnInit(): void {
    this.nameActual.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log(this.id);
    })

    this.api.getHotelsById(this.id).subscribe((data:any) => {
      this.hotelAbout = data;
    })
    
    
    
  }
  editHotel(){
    
    this.api.setHotel(this.hotelAbout, this.id);
    this.route.navigate(['hotel_edit']);
  }
  terminateHotel() {
    this.api.deleteHotel(this.id).subscribe((data) => {
      console.log(data, 'estoy dentro de terminateHotel');
      
      this.route.navigate(['hotels'])
    })
    console.log('voy a borrar' + this.id);
  
  }

}
