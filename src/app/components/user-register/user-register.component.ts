import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TravelPackagesService} from "../../travel-packages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{

  RegUserData: any
  constructor(private TravelPackageServices: TravelPackagesService, private router: Router) {
  }
  ngOnInit(): void {

  }

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  UserRegistration(){
    this.RegUserData = this.form.value
    this.TravelPackageServices.RegUsers(this.RegUserData).subscribe(data=>{
      console.log(data)
      alert('User registered successfully!')
      this.router.navigate(['/login'])

    })

  }

}
