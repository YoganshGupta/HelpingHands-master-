import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'services/medicine.service';



@Component({
  selector: 'app-medicinesngo',
  templateUrl: './medicinesngo.component.html',
  styleUrls: ['./medicinesngo.component.css']
})
export class MedicinesngoComponent implements OnInit {

  medicinesData: any

  constructor(private _medicinesService: MedicineService) { }

  ngOnInit() {
    this._medicinesService.getMedicines()
    .subscribe(
      data=> {console.log(data), this.medicinesData = data, console.log(this.medicinesData)},
      error=> console.error(error)
    )
  }

}
