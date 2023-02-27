import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
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

    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide
      },
    ];


    this.galleryImages = [
      {
        small: 'assets/Images/Jashn-living1.jpg',
        medium: 'assets/Images/Jashn-living1.jpg',
        big: 'assets/Images/Jashn-living1.jpg'
      },
      {
        small: 'assets/Images/Jashn-bedroom1.jpg',
        medium: 'assets/Images/Jashn-bedroom1.jpg',
        big: 'assets/Images/Jashn-bedroom1.jpg'
      },
      {
        small: 'assets/Images/Jashn-kitchen1.jpg',
        medium: 'assets/Images/Jashn-kitchen1.jpg',
        big: 'assets/Images/Jashn-kitchen1.jpg'
      },
      {
        small: 'assets/Images/Jashn-dinning2.jpg',
        medium: 'assets/Images/Jashn-dinning2.jpg',
        big: 'assets/Images/Jashn-dinning2.jpg'
      },
      {
        small: 'assets/Images/Jashn-balcony.jpg',
        medium: 'assets/Images/Jashn-balcony.jpg',
        big: 'assets/Images/Jashn-balcony.jpg'
      },
    ];
  }
}
