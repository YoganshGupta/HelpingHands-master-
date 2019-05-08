import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngo } from 'models/ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  
  _url = 'http://localhost:3000/api/saveNgo';

  _authenticateUrl = 'http://localhost:3000/ngoApi/authenticateNgo'; 

  saveSignupNgo(ngo: Ngo){
    return this._http.post<any>(this._url,ngo);
  }

  authenticateNgo(ngo){
    console.log("Inside authenticateNgo" + JSON.stringify(ngo))
    return this._http.post<any>(this._authenticateUrl,ngo);

  }

  constructor(private _http: HttpClient) { }

  
}
