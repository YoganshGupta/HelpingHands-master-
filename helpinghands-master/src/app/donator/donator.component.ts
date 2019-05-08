import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Donator } from 'models/donator';
import { DonatorService } from 'services/donator.service';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {

  constructor(public route : Router, private _donatorService: DonatorService) { }

  donatorModel = new Donator('','','','','','',''); 

  submitted = false

  ngOnInit() {
  }
  
  onDonatorSignupSubmit()
  {
    this.submitted = true
    this._donatorService.saveSignupDonator(this.donatorModel)
    .subscribe(
      data => console.log("Message"+ JSON.stringify(data)),
      error => console.log(error)
    )
    
    
    
    console.log(this.donatorModel);
     
    setTimeout(function() { }, 7000);
    this.route.navigate(['/logindonator']);
  }



}
