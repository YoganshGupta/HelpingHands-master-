import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donator } from 'models/donator';


@Injectable({
  providedIn: 'root'
})
export class DonatorService {

  _url = 'http://localhost:3000/api/saveDonator';

  _authenticateUrl = 'http://localhost:3000/donatorApi/authenticateDonator'; 

  saveSignupDonator(donator: Donator){
    return this._http.post<any>(this._url,donator);
  }


  authenticateDonator(donator){
    console.log("Inside authenticateDonator" + JSON.stringify(donator))
    return this._http.post<any>(this._authenticateUrl,donator);

  }

  constructor(private _http: HttpClient) { }
}
