import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-list-restau',
  templateUrl: './list-restau.component.html',
  styleUrls: ['./list-restau.component.css']
})
export class ListRestauComponent implements OnInit {
  data:any=[];
  constructor(private _ser:RestServiceService) { }

  ngOnInit(): void {
     this._ser.getList().subscribe((value)=>{console.log("result is here", value)
      this.data = value;
       })

  }
  deleteResto(item){
    this.data.splice(item-1, 1)
    this._ser.deleteResto(item).subscribe((result)=>{console.warn("result",result)});
  }

}
