import { Injectable } from '@angular/core';
import { HttpClient } from '../node_modules/@angular/common/http';
import { Medicine } from 'models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  _formSubmitUrl = 'http://localhost:3000/medicineApi/saveMedicine'
  _getMedicinesUrl = 'http://localhost:3000/medicineApi/getMedicines'

  constructor(private _http: HttpClient) { }


  postFormData(medicine: Medicine){
    return this._http.post<any>(this._formSubmitUrl,medicine)
  }

  getMedicines(){
    return this._http.get<any>(this._getMedicinesUrl)
  }
}
