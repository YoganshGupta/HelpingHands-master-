import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ngo } from 'models/ngo';
import { NgoService } from 'services/ngo.service';


@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  constructor(public route : Router,private _ngoService: NgoService) { }
 
  ngoModel = new Ngo('','','','','',''); 

  submitted = false

  ngOnInit() {
  }

  onNgoSignupSubmit()
  {
    this.submitted = true
    this._ngoService.saveSignupNgo(this.ngoModel)
    .subscribe(
      data => console.log("Message"+ JSON.stringify(data)),
      error => console.log(error)
    )

    console.log(this.ngoModel);
     
    setTimeout(function() { }, 7000);
    this.route.navigate(['/loginngo']);
  }

  

}