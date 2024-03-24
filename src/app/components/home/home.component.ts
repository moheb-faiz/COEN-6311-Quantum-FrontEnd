import {Component, OnInit} from '@angular/core';
import {TravelPackagesService} from "../../travel-packages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  LoadPKgs : any
  constructor(private loadTravelPakcages: TravelPackagesService, private router: Router) {
  }
  ngOnInit(): void {

    this.loadTravelPakcages.getVwTravelPackages().subscribe(data=>{
      this.LoadPKgs = data
      console.log(data)
    })

  }

}
