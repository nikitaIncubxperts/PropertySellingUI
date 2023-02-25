import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { HousingService } from 'src/app/Services/housing.service';
import { IProperty } from '../property-list/IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {   
        this.properties = data

        // const newProperty = JSON.parse(localStorage.getItem('newProp') as string);
        // if (newProperty.sellRent==this.SellRent) {
        //   this.properties = [newProperty, ...this.properties]
        // }
      }
    )
  }
}
