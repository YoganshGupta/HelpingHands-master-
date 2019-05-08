import { Component, OnInit } from '@angular/core';
import { MiscellaneousService } from 'services/miscellaneous.service';


@Component({
  selector: 'app-miscellaneousngo',
  templateUrl: './miscellaneousngo.component.html',
  styleUrls: ['./miscellaneousngo.component.css']
})
export class MiscellaneousngoComponent implements OnInit {

  miscellaneousData: any

  constructor(private _miscellaneousService: MiscellaneousService) { }

  ngOnInit() {
    this._miscellaneousService.getMiscellaneous()
    .subscribe(
      data=> {console.log(data), this.miscellaneousData = data, console.log(this.miscellaneousData)},
      error=> console.error(error)
    )
  }

}
