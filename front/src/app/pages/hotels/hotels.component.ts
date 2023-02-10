import { ApiService } from './../../shared/services/api.service';
import { Ihotel } from './../../interfaces/ihotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotels!: Ihotel[];
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getHotels().subscribe((data: any) => {
      this.hotels = [...data]
    })
  }
  
}

