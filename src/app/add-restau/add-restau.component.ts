import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestServiceService } from '../rest-service.service'


@Component({
  selector: 'app-add-restau',
  templateUrl: './add-restau.component.html',
  styleUrls: ['./add-restau.component.css']
})
export class AddRestauComponent implements OnInit {
  alert: boolean = false;
  addReso = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    address: new FormControl('')
  })
  get email() {
    return this.addReso.get('email')
  };
  get address() {
    return this.addReso.get('address')
  };


  constructor(private resta: RestServiceService) { }

  ngOnInit(): void {
  }
  collectResto() {
    //console.warn(this.resta.value)
    this.resta.postUserValues(this.addReso.value).subscribe((result) => {
      this.alert = true;
      this.addReso.reset();
    })

  }
  closeAlert() {
    this.alert = false;
  }

}
