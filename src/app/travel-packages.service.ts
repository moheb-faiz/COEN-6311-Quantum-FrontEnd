import { Injectable } from '@angular/core';
import TravelPackages from "./TravelPackages";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import BookingFrm from "./BookingFrm";



@Injectable({
  providedIn: 'root'
})
export class TravelPackagesService {
  private url: string ="http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }


  getTravelPackages():Observable<TravelPackages[]>{
    return this.http.get<TravelPackages[]>(`${this.url}/travelpackages/`)
  }

  getVwTravelPackages():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/vwtravelpackages/`)
  }

  getVwTravelPackagesByID(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/vwtravelpackages/${id}`)

  }

  getFlightDropdown():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/flightdropdown/`)

  }

  getFlightDropdownByID(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/flightdropdown/${id}`)

  }

  getLocationDropdown():Observable<any[]>{
  return this.http.get<any[]>(`${this.url}/locations/`)
  }

  getLocationDropdownByID(id:number):Observable<any[]>{
  return this.http.get<any[]>(`${this.url}/locations/${id}`)
  }

  getActivityDropdown():Observable<any[]>{
  return this.http.get<any[]>(`${this.url}/activities/`)
  }

  getHotelRoomDropdown():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/vwhotelroom/`)
  }

  getVwBookingInfo():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/vwbookinginfo/`)
  }

  getTravelPackagesByID(id:number):Observable<TravelPackages>{
    return this.http.get<TravelPackages>(`${this.url}/travelpackages/${id}`)

  }

  addTravelPackages(TravelPackage: TravelPackages):Observable<TravelPackages>{
    return this.http.post<TravelPackages>(`${this.url}/travelpackages/`,TravelPackage)

  }

  updateTravelPackages(id:number, TravelPackage: TravelPackages):Observable<TravelPackages>{
    return this.http.put<TravelPackages>(`${this.url}/travelpackages/${id}/`,TravelPackage)

  }

  deleteTravelPackages(id:number): Observable<TravelPackages>{
    return this.http.delete<TravelPackages>(`${this.url}/travelpackages/${id}`)
  }

  addBookingData(BookingData:any):Observable<any>{
    return this.http.post<any>(`${this.url}/bookinginfo/`,BookingData)

  }

}
