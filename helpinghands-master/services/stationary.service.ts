import { Injectable } from '@angular/core';
import { HttpClient } from '../node_modules/@angular/common/http';
import { Stationary } from 'models/stationary';

@Injectable({
  providedIn: 'root'
})
export class StationaryService {

  _formSubmitUrl ='http://localhost:3000/stationaryApi/saveStationary'
  _getStationaryUrl ='http://localhost:3000/stationaryApi/getStationary'

  constructor(private _http: HttpClient) { }

  postFormData(stationary: Stationary){
    return this._http.post<any>(this._formSubmitUrl, stationary)
  }

  getStationary(){
    return this._http.get<any>(this._getStationaryUrl)
  }
}
