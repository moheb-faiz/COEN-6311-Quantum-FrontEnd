import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowPackagesComponent} from "./components/show-packages/show-packages.component";
import {AddPackagesComponent} from "./components/add-packages/add-packages.component";
import {UpdatePackagesComponent} from "./components/update-packages/update-packages.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path:'show', component: ShowPackagesComponent},
  {path:'add', component: AddPackagesComponent},
  {path:'update/:id', component: UpdatePackagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
