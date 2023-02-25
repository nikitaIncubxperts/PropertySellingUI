import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number
  property = new Property()
  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp']
      }
    )

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.GetProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         console.log("My Data: ",data.desc);            
    //         this.property = data
    //       }
    //     )
    //   }
    // )
  }
}
