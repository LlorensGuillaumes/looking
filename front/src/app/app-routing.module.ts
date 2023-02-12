import { EditHotelModule } from './pages/edit-hotel/edit-hotel.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import('./pages/home/home.module').then((m)=>m.HomeModule)},
  {path:"hotels", loadChildren: () => import('./pages/hotels/hotels.module').then((m)=>m.HotelsModule)},
  {path:"hotel_add", loadChildren: () => import('./pages/add-hotel/add-hotel.module').then((m)=>m.AddHotelModule)},
  {path:"hotel_edit", loadChildren: () => import('./pages/edit-hotel/edit-hotel.module').then((m)=>m.EditHotelModule)},
  {path:"hotel_detail", loadChildren: () => import('./pages/hotel-detail/hotel-detail.module').then((m)=>m.HotelDetailModule)},
  {path:"login", loadChildren: () => import('./pages/login/login-routing.module').then((m)=>m.LoginRoutingModule)},
{path:"registro", loadChildren:() => import('./pages/register/register-routing.module').then((m)=>m.RegisterRoutingModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
