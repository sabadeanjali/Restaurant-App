import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestauComponent } from './add-restau/add-restau.component';
import { UpdateRestauComponent } from './update-restau/update-restau.component';
import { ListRestauComponent } from './list-restau/list-restau.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:ListRestauComponent},
  {path:'add', component:AddRestauComponent},
  {path:'update/:id', component:UpdateRestauComponent},
  {path:'list', component:ListRestauComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
