import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DonatorService } from 'services/donator.service';



@Component({
  selector: 'app-logindonator',
  templateUrl: './logindonator.component.html',
  styleUrls: ['./logindonator.component.css']
})
export class LogindonatorComponent implements OnInit {
 
  donator = {
  "username": "",
  "password": ""
  }

  receivedDonator: any

  constructor(public route : Router, private _donatorService: DonatorService) { }

  ngOnInit() {
  }

  onLogin()
  {
    console.log(this.donator);


    this._donatorService.authenticateDonator(this.donator)
    .subscribe(
      data => {
        //console.log("Message"+ JSON.stringify(data)),
        this.receivedDonator = data
        console.log(JSON.stringify(this.receivedDonator));
        if(this.receivedDonator){
        this.route.navigate(['/options'],{
          queryParams: {data1: JSON.stringify(data) }
        });
      }
      else{
        
      }
    },
      error => console.log(error)
    )

    

    
  }
  
}