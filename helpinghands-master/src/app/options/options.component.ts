import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  donatorDetail:any


  constructor(private router: Router,private route: ActivatedRoute) { }

  onMedicineClick(){
    console.log(this.donatorDetail.firstName+ ' passed to medicines .ts ')
    this.router.navigate(['/medicines'],{
      queryParams: {Donatordata: JSON.stringify(this.donatorDetail) }
    });
  }

  onClothesClick(){
    console.log('name->'+this.donatorDetail.firstName+ ' passed to clothes .ts')
    this.router.navigate(['/clothes'],{
      queryParams: {Donatordata: JSON.stringify(this.donatorDetail) }
    });
  }

  onStationaryClick(){
    console.log('inside onStationaryClick')
    console.log('name->'+this.donatorDetail.firstName+ ' passed to stattionary .ts')
    this.router.navigate(['/stationery'],{
      queryParams: {Donatordata: JSON.stringify(this.donatorDetail) }
    });
  }

  onMiscellaneousClick(){
    //console.log('inside onStationaryClick')
    console.log('name->'+this.donatorDetail.firstName+ ' passed to miscellaneous .ts')
    this.router.navigate(['/miscellaneous'],{
      queryParams: {Donatordata: JSON.stringify(this.donatorDetail) }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.data1);
      console.log(this.donatorDetail.firstName)
    })
  }

}
