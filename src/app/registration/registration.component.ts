import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestServiceService} from '../rest-service.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  alert:boolean=false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private rest:RestServiceService) { }

  get email(){
   return this.register.get('email');
  };
  get password(){
    return this.register.get('password');
  }
  closeAlert(){
    this.alert=false;
  }
  registrationFun(){
    console.log(this.register.value)
    this.rest.registerUser(this.register.value)
    .subscribe((result)=>{console.log('result', result)
  this.alert=true})

  }

  ngOnInit(): void {
  }

}
