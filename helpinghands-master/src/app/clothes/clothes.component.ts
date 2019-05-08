import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Clothes } from 'models/clothes';
import { ClothesService } from 'services/clothes.service';

import {FlashMessagesService} from "angular2-flash-messages"
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  donatorDetail: any

  donorName: String

  clothesModel: any

  constructor(private router: Router,private route: ActivatedRoute, private _clothesService: ClothesService
  ,public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata)
      this.donorName = this.donatorDetail.firstName

      this.clothesModel = new Clothes(this.donatorDetail.firstName,
        this.donatorDetail.lastName,
        this.donatorDetail.email,
        this.donatorDetail.address,
        this.donatorDetail.contact,
        this.donatorDetail.uname,
        '','','','');

        console.log(this.clothesModel)

      //console.log(this.donatorDetail)
      console.log(this.donorName)
  })}


  onClothesFormSubmit(){
    this._clothesService.postFormData(this.clothesModel)
    .subscribe(
      data=>{

       console.log('Clothes Form submitted ',data),
       this.showSuccessMssg();
      },
      error => console.error(error)
      
    )
  }

  showSuccessMssg(){
    this.flashMessageService.show('Clothes Form Submitted Successfully',
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