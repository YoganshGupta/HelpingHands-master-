import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Stationary } from 'models/stationary';
import { StationaryService } from 'services/stationary.service';

import {FlashMessagesService} from "angular2-flash-messages"
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {

  donatorDetail: any

  donorName: String

  stationaryModel: any

  constructor(private router: Router,private route: ActivatedRoute, private _stationaryService: StationaryService
  ,public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata)
      this.donorName = this.donatorDetail.firstName

      this.stationaryModel = new Stationary(this.donatorDetail.firstName,
        this.donatorDetail.lastName,
        this.donatorDetail.email,
        this.donatorDetail.address,
        this.donatorDetail.contact,
        this.donatorDetail.uname,
        '','');

      console.log(this.stationaryModel)

      //console.log(this.donatorDetail)
      console.log(this.donorName)
  })}


  onStationaryFormSubmit(){
    this._stationaryService.postFormData(this.stationaryModel)
    .subscribe(
      data=> {console.log('Stationary data submitted',data),
      this.showSuccessMssg();
    },
      error=> console.error(error)
    )
  }

  showSuccessMssg(){
    this.flashMessageService.show('Stationery Form Submitted Successfully',
         {cssClass: 'alert-success', timeout:3000});

         this.router.navigate(['/options'],{
          queryParams: {data1: JSON.stringify(this.donatorDetail) }
        });

  }


  onSignup(signupForm)
  {
    this.router.navigate(['/options']);
  }

}
