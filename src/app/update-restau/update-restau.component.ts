import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-update-restau',
  templateUrl: './update-restau.component.html',
  styleUrls: ['./update-restau.component.css']
})
export class UpdateRestauComponent implements OnInit {

  alert: boolean = false;
  editReso = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('')
  })

  get email() {
    return this.editReso.get('email')
  };
  get address() {
    return this.editReso.get('address')
  };
  closeAlert(){
    this.alert=false;
  }

  constructor(private _router: ActivatedRoute, private rest: RestServiceService) { };

  ngOnInit(): void {
    console.log(this._router.snapshot.params.id)
    this.rest.getCurrentResto(this._router.snapshot.params.id).subscribe(
      (result) => {
        this.editReso = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address'])
        })
      })
  }
  collection(){
    console.warn(this.editReso.value);
    this.rest.updateResto(this._router.snapshot.params.id, this.editReso.value)
    .subscribe((result)=>{  this.alert = true;
      this.editReso.reset();})

  }

}
