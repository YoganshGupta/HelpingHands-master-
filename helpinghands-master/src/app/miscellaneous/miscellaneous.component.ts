import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute } from '@angular/router';
import { MiscellaneousService } from 'services/miscellaneous.service';
import { Miscellaneous } from 'models/miscellaneous';

import {FlashMessagesService} from "angular2-flash-messages"
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  donatorDetail: any

  donorName: String

  miscellaneousModel : any

  constructor(private router: Router,private route: ActivatedRoute, private _miscellaneousService: MiscellaneousService,
    public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata)
      this.donorName = this.donatorDetail.firstName

      this.miscellaneousModel = new Miscellaneous(this.donatorDetail.firstName,
        this.donatorDetail.lastName,
        this.donatorDetail.email,
        this.donatorDetail.address,
        this.donatorDetail.contact,
        this.donatorDetail.uname,
        '','','');
        console.log(this.miscellaneousModel)
      console.log(this.donatorDetail)
      console.log(this.donorName)
  })}

  onMiscellaneousFormSubmit(){
    console.log(this.miscellaneousModel)
    this._miscellaneousService.postFormData(this.miscellaneousModel)
    .subscribe(
      data=> {
         console.log('Miscellaneous Form submitted', data);
         this.showSuccessMssg();
         
         
      },
      error=> console.error('Error',error)
       
    )
  }

  showSuccessMssg(){
    this.flashMessageService.show('Miscellaneous Form Submitted Successfully',
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
