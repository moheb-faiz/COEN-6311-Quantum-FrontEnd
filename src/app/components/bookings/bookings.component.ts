import {Component, OnInit} from '@angular/core';
import {TravelPackagesService} from "../../travel-packages.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  LoadPKgs : any
  id: any
  Package_ID: any
  Customer_ID: any
  Card_Number: any
  Expiry_Date: any
  CVC_Number: any
  Payment_Amount:any
  Booking_Date: any

  constructor(private LoadTravelPakcages: TravelPackagesService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
     this.LoadTravelPakcages.getVwTravelPackagesByID(this.id).subscribe(data=>{
      this.LoadPKgs = data
         console.log(data)
       this.Package_ID=this.LoadPKgs.id
       this.Customer_ID =1
       this.Booking_Date = new Date().toISOString().slice(0,10)




    })

  }

  saveBookingData(): void {
   const val = {
     Package_ID: this.Package_ID,
     Customer_ID:this.Customer_ID,
     Card_Number: this.Card_Number,
     Expiry_Date: this.Expiry_Date,
     CVC_Number: this.CVC_Number,
     Payment_Amount: this.Payment_Amount,
     Booking_Date: this.Booking_Date


   };
    this.LoadTravelPakcages.addBookingData(val).subscribe(data => {
      console.log(data);
      alert('Booking Confirmed.')
    });
  }

}
