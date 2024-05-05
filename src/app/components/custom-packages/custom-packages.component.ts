import {Component, numberAttribute, OnInit} from '@angular/core';
import { TravelPackagesService } from "../../travel-packages.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {getLocaleTimeFormat} from "@angular/common";

@Component({
  selector: 'app-custom-packages',
  templateUrl: './custom-packages.component.html',
  styleUrl: './custom-packages.component.css'
})
export class CustomPackagesComponent implements OnInit{
  travelPkgs: any; // data to bind controls for update
  data: any;
  id:any
  flightDropdownFill: any[] = [];
  locationDropdownFill: any[] = [];
  activityDropdownFill: any[] = [];
  hotelRoomDropDownFill: any[]=[];
  TravelPkgs: any | undefined; // data for table
  FormTitle:any
  BtnTitle:any
  PackageNameFilter: any
  BookingInfo: any
  // PackageLocationFilter: any
  // PackagePriceFilter: number| undefined
  // PackageNoFilter:any=[];


  constructor(private travelPackageService: TravelPackagesService, private router: Router) { }

  ngOnInit(): void {
    this.travelPackageService.getVwCustomTravelPackages().subscribe(data => {
      this.TravelPkgs = data;
      console.log(data);
      // this.PackageNoFilter = data
    });
  }

  deleteTravelPackage(id: number): void {
    if (confirm('Are you sure?')) {
      this.travelPackageService.deleteCustomTravelPackages(id).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
  }

  editClick(id: number): void {
    this.FormTitle='Edit Record'
    this.BtnTitle='Update'
    this.id = id
    this.travelPackageService.getVwCustomTravelPackagesByID(this.id).subscribe(data => {
      if (data) {
        this.travelPkgs = data;
        console.log(data);

        this.form.patchValue({
          Custom_Package_Name: this.travelPkgs.Custom_Package_Name,
          Location_ID: this.travelPkgs.LocationID,
          Flight_ID: this.travelPkgs.FlightID,
          Hotel_Rooms_ID: this.travelPkgs.HotelRoomID,
          Activity_ID: this.travelPkgs.ActivityID,
          Package_Price: this.travelPkgs.Package_Price,
          Package_Description: this.travelPkgs.Package_Description
        });
      }
    });

    // Flight Dropdown Fill
    this.travelPackageService.getFlightDropdown().subscribe(data => {
      this.flightDropdownFill = data;
      console.log(data);
    });

    // Locations Dropdown Fill
    this.travelPackageService.getLocationDropdown().subscribe(data => {
      this.locationDropdownFill = data;
      console.log(data);
    });

    // Activities Dropdown Fill
    this.travelPackageService.getActivityDropdown().subscribe(data => {
      this.activityDropdownFill = data;
      console.log(data);
    });

    this.travelPackageService.getHotelRoomDropdown().subscribe(data => {
      this.hotelRoomDropDownFill = data;
      console.log(data);
    });
  }

  form = new FormGroup({
    Custom_Package_Name: new FormControl('', Validators.required),
    Location_ID: new FormControl('', Validators.required),
    Flight_ID: new FormControl('', Validators.required),
    Hotel_Rooms_ID: new FormControl('', Validators.required),
    Activity_ID: new FormControl('', Validators.required),
    Package_Price: new FormControl('', Validators.required),
    Package_Description: new FormControl('', Validators.required)
  });

  ngSubmitForms(){

    if(this.id==0)
    {
      this.addTravelPackages()
    }
    else{
      this.updateTravelPackages()
    }

  }
   updateTravelPackages(): void {
    this.data = this.form.value;
    this.travelPackageService.updateCustomTravelPackages(this.travelPkgs?.id, this.data).subscribe(data => {
      if (data) {
        console.log(data);
        alert('Record updated successfully!');
        this.ngOnInit();
      }
    });
  }

  addClick(): void {
    this.id=0
    this.form.reset()
    this.FormTitle='Add New Record'
    this.BtnTitle='Save'

    // Flight Dropdown Fill
    this.travelPackageService.getFlightDropdown().subscribe(data => {
      this.flightDropdownFill = data;
      console.log(data);
    });

    // Locations Dropdown Fill
    this.travelPackageService.getLocationDropdown().subscribe(data => {
      this.locationDropdownFill = data;
      console.log(data);
    });

    // Activities Dropdown Fill
    this.travelPackageService.getActivityDropdown().subscribe(data => {
      this.activityDropdownFill = data;
      console.log(data);
    });

    this.travelPackageService.getHotelRoomDropdown().subscribe(data => {
      this.hotelRoomDropDownFill = data;
      console.log(data);
    });
  }
  closeClick(){
    this.form.reset()
     this.ngOnInit()
  }

  addTravelPackages(): void {
    if(!this.form.valid)
    {
      console.log('the form is not valid.')
      return;
    }
    this.data = this.form.value;
    this.travelPackageService.addCustomTravelPackages(this.data).subscribe(data => {
      console.log(data);
      alert('Record added successfully.')
      this.ngOnInit();
    });
  }

 LoadBookingInfo(): void{
    this.travelPackageService.getVwCustomBooking().subscribe(data=>{
      this.BookingInfo = data
      console.log(data)
    })

 }

 CancelBooking(): void{

 }

}
