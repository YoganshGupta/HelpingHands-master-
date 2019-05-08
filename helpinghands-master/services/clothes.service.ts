import { Injectable } from '@angular/core';
import { HttpClient } from '../node_modules/@angular/common/http';
import { Clothes } from 'models/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  _formSubmitUrl = 'http://localhost:3000/clothesApi/saveClothes'
  _getClothesUrl = 'http://localhost:3000/clothesApi/getClothes'

  constructor(private _http: HttpClient) { }

  postFormData(clothes: Clothes){
    return this._http.post<any>(this._formSubmitUrl , clothes)
  }

  getClothes(){
    return this._http.get<any>(this._getClothesUrl)
  }
}
