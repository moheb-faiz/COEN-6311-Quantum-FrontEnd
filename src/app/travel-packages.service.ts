import { Injectable } from '@angular/core';
import TravelPackages from "./TravelPackages";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import BookingFrm from "./BookingFrm";
import CustomTravelPackage from "./customTravelPackage";



@Injectable({
  providedIn: 'root'
})
export class TravelPackagesService {
  private url: string ="http://localhost:8000"

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

  getVwCustomTravelPackages():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/vwcustomtravelpackages/`)
  }

  getVwCustomTravelPackagesByID(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/vwcustomtravelpackages/${id}`)

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

   getVwCustomBooking():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/vwcustombooking/`)
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

  addCustomTravelPackages(CustomPackage: CustomTravelPackage):Observable<CustomTravelPackage>{
    return this.http.post<CustomTravelPackage>(`${this.url}/customtravelpackages/`,CustomPackage)

  }

  updateCustomTravelPackages(id:number, CustomPackage: CustomTravelPackage):Observable<CustomTravelPackage>{
    return this.http.put<CustomTravelPackage>(`${this.url}/customtravelpackages/${id}/`,CustomPackage)

  }

  deleteCustomTravelPackages(id:number): Observable<CustomTravelPackage>{
    return this.http.delete<CustomTravelPackage>(`${this.url}/customtravelpackages/${id}`)
  }


  addBookingData(BookingData:any):Observable<any>{
    return this.http.post<any>(`${this.url}/bookinginfo/`,BookingData)

  }

  RegUsers(RegUser:any):Observable<any>{
    return this.http.post<any>(`${this.url}/register/`,RegUser)

  }

  UserLogin(UsersLogin:any):Observable<any>{
    return this.http.post<any>(`${this.url}/login/`,UsersLogin, {withCredentials: true})

  }

getUsers():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/user/`, {withCredentials:true})
  }

LogoutUser(logoutuser:any):Observable<any>{
    return this.http.post<any>(`${this.url}/logout/`,logoutuser, {withCredentials: true})

  }




}
