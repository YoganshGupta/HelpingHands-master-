import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Miscellaneous } from 'models/miscellaneous';


@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  _formSubmitUrl = 'http://localhost:3000/miscellaneousApi/saveMiscellaneous'
  _getMiscellaneousUrl = 'http://localhost:3000/miscellaneousApi/getMiscellaneous'

  constructor(private _http: HttpClient) { }

  postFormData(miscellaneous: Miscellaneous){
    return this._http.post<any>(this._formSubmitUrl,miscellaneous)
  }

  getMiscellaneous(){
    return this._http.get<any>(this._getMiscellaneousUrl)
  }
}
