import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgoService } from 'services/ngo.service';



@Component({
  selector: 'app-loginngo',
  templateUrl: './loginngo.component.html',
  styleUrls: ['./loginngo.component.css']
})
export class LoginngoComponent implements OnInit {

  ngo = {
    "username": "",
    "password": ""
    }
  
    receivedNgo: any
  
  
  constructor(public route : Router,private _ngoService: NgoService) { }

  ngOnInit() {
  }

  onLogin()
  {
    console.log(this.ngo);


    this._ngoService.authenticateNgo(this.ngo)
    .subscribe(
      data => {
        //console.log("Message"+ JSON.stringify(data)),
        this.receivedNgo = data
        console.log(JSON.stringify(this.receivedNgo));
        if(this.receivedNgo){
        this.route.navigate(['/requirements'],{
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
