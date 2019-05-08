import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Medicine } from 'models/medicine';
import { MedicineService } from 'services/medicine.service';

import {FlashMessagesService} from "angular2-flash-messages"
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  donatorDetail: any

  donorName: String

  constructor(private router: Router,private route: ActivatedRoute,private _medicineService: MedicineService,
              public flashMessageService: FlashMessagesService) { }

  medicineModel : any

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata);
      this.donorName = this.donatorDetail.firstName;

      this.medicineModel = new Medicine(this.donatorDetail.firstName,
        this.donatorDetail.lastName,
        this.donatorDetail.email,
        this.donatorDetail.address,
        this.donatorDetail.contact,
        this.donatorDetail.uname,
        '','','','','','');

      console.log(this.medicineModel)

      console.log(this.donatorDetail)
      console.log(this.donorName)
      
    })
  }

  onMedicineFormSubmit(){
    console.log(this.medicineModel)
    this._medicineService.postFormData(this.medicineModel)
    .subscribe(
      data=> {
         console.log('Medicine Form submitted', data);
         this.showSuccessMssg();
         
         
      },
      error=> console.error('Error',error)
       
    )
  }

  showSuccessMssg(){
    this.flashMessageService.show('Medicines Form Submitted Successfully',
         {cssClass: 'alert-success', timeout:3000});

         this.router.navigate(['/options'],{
          queryParams: {data1: JSON.stringify(this.donatorDetail) }
        });

  }

  onSignup(signupForm)
  {
    this.router.navigate(['/options'])
  }

}