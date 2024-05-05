import {Component, OnInit} from '@angular/core';
import {TravelPackagesService} from "./travel-packages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  constructor(private TravelServices: TravelPackagesService) {
  }

  title:any ;

  ngOnInit(): void {


  }



}
