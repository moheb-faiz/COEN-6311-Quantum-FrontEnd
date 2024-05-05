import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TravelPackagesService} from "../../travel-packages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  ULogin: any
  constructor(private TravelPackageServices: TravelPackagesService, private router: Router) {
  }
  ngOnInit(): void {

  }

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  UserLogin(){
    this.ULogin = this.form.value
    this.TravelPackageServices.UserLogin(this.ULogin).subscribe(data =>{
      console.log(data)
      this.router.navigate(['/'])

    })
  }
}
