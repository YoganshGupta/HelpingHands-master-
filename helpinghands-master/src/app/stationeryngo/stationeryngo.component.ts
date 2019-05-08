import { Component, OnInit } from '@angular/core';
import { StationaryService } from 'services/stationary.service';

@Component({
  selector: 'app-stationeryngo',
  templateUrl: './stationeryngo.component.html',
  styleUrls: ['./stationeryngo.component.css']
})
export class StationeryngoComponent implements OnInit {

  stationaryData: any

  constructor(private _stationaryService: StationaryService) { }

  ngOnInit() {
    this._stationaryService.getStationary()
    .subscribe(
      data=> {console.log(data), this.stationaryData = data, console.log(this.stationaryData)},
      error=> console.error(error)
    )
  }
}
