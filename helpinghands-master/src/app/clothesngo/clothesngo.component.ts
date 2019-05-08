import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'services/clothes.service';

@Component({
  selector: 'app-clothesngo',
  templateUrl: './clothesngo.component.html',
  styleUrls: ['./clothesngo.component.css']
})
export class ClothesngoComponent implements OnInit {

  clothesData: any

  constructor(private _clothesService: ClothesService) { }

  ngOnInit() {
    this._clothesService.getClothes()
    .subscribe(
      data=> {console.log(data), this.clothesData = data, console.log(this.clothesData)},
      error=> console.error(error)
    )
  }

}
