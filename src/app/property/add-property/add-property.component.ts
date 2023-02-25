import { Component, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/Services/housing.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  //@ViewChild('formTabs', { static: false }) formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  property = new Property();

  PropertyType: Array<string> = ['House', 'Apartment', 'Duplex', 'Row-House', 'Villa']
  FurnishedType: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  constructor(private fb: FormBuilder, private router: Router, private housingService: HousingService) {
  }

  ngOnInit() {
    this.CreateAddPropertyForm()
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      basicInfo: this.fb.group({
        sellRent: [null, Validators.required],
        bhk: [null, Validators.required],
        propType: [null, Validators.required],
        fType: [null, Validators.required],
        name: [null, Validators.required],
        city: [null, Validators.required],
      }),
      pricingArea: this.fb.group({
        price: [null, Validators.required],
        builtArea: [null, Validators.required],
        security: [null, Validators.required],
        maintenance: [null, Validators.required],
        carpetArea: [null, Validators.required],
      }),
      address: this.fb.group({
        floor: [null, Validators.required],
        totalFloor: [null, Validators.required],
        addr: [null, Validators.required],
        landmark: [null, Validators.required],
      }),
      otherDetails: this.fb.group({
        rtm: [null, Validators.required],
        date: [null, Validators.required],
        ageOfProp: [null, Validators.required],
        gated: [null, Validators.required],
        entrance: [null, Validators.required],
        desc: [null, Validators.required]
      }),
      photos: this.fb.group({
        photo: [null, Validators.required]
      })
    })
  }

  
  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit() {
    this.mapProperty()
    this.housingService.AddProperty(this.property)
    console.log(this.addPropertyForm)
    alertify.success("New property added..")
    if(this.sellRent.value==2){
      this.router.navigate(['/rent-property'])
    }else{
      this.router.navigate(['/'])
    }
  }

  selectTab(tabId: number) {
    //this.formTabs.tabs[tabId].active = true;
  }

  mapProperty(): void{
    this.property.id = this.housingService.NewPropId();
    this.property.sellRent = +this.sellRent.value;
    this.property.bhk = this.bhk.value;
    this.property.propType = this.propType.value;
    this.property.fType = this.fType.value;
    this.property.name = this.name.value;
    this.property.city = this.city.value;

    this.property.price = this.price.value;
    this.property.builtArea = this.builtArea.value;
    this.property.security = this.security.value;
    this.property.maintenance = this.maintenance.value;
    this.property.carpetArea = this.carpetArea.value;

    this.property.floor = this.floor.value;
    this.property.totalFloor = this.totalFloor.value;
    this.property.addr = this.addr.value;

    this.property.rtm = this.rtm.value;
    this.property.age = this.ageOfProp.value;
    this.property.entrance = this.entrance.value;
    this.property.gated = this.gated.value;
    this.property.date = new Date().toString();
    this.property.floor = this.floor.value;
    this.property.desc = this.desc.value;
  }

  get basicInfo() {
    return this.addPropertyForm.controls['basicInfo'] as FormGroup;
  }

  get pricingArea() {
    return this.addPropertyForm.controls['pricingArea'] as FormGroup;
  }

  get address() {
    return this.addPropertyForm.controls['address'] as FormGroup;
  }

  get otherDetails() {
    return this.addPropertyForm.controls['otherDetails'] as FormGroup;
  }

  get photos() {
    return this.addPropertyForm.controls['photos'] as FormGroup;
  }

  get sellRent() {
    return this.basicInfo.controls['sellRent'] as FormGroup;
  }

  get bhk() {
    return this.basicInfo.controls['bhk'] as FormGroup;
  }

  get propType() {
    return this.basicInfo.controls['propType'] as FormGroup;
  }

  get fType() {
    return this.basicInfo.controls['fType'] as FormGroup;
  }

  get name() {
    return this.basicInfo.controls['name'] as FormGroup;
  }

  get city() {
    return this.basicInfo.controls['city'] as FormGroup;
  }

  get price() {
    return this.pricingArea.controls['price'] as FormGroup;
  }

  get builtArea() {
    return this.pricingArea.controls['builtArea'] as FormGroup;
  }

  get security() {
    return this.pricingArea.controls['security'] as FormGroup;
  }

  get maintenance() {
    return this.pricingArea.controls['maintenance'] as FormGroup;
  }

  get carpetArea() {
    return this.pricingArea.controls['carpetArea'] as FormGroup;
  }

  get floor() {
    return this.address.controls['floor'] as FormGroup;
  }

  get totalFloor() {
    return this.address.controls['totalFloor'] as FormGroup;
  }

  get addr() {
    return this.address.controls['addr'] as FormGroup;
  }

  get landmark() {
    return this.address.controls['landmark'] as FormGroup;
  }

  get rtm() {
    return this.otherDetails.controls['rtm'] as FormGroup;
  }

  get date() {
    return this.otherDetails.controls['date'] as FormGroup;
  }

  get ageOfProp() {
    return this.otherDetails.controls['ageOfProp'] as FormGroup;
  }

  get gated() {
    return this.otherDetails.controls['gated'] as FormGroup;
  }

  get entrance() {
    return this.otherDetails.controls['entrance'] as FormGroup;
  }

  get desc() {
    return this.otherDetails.controls['desc'] as FormGroup;
  }

  get photo() {
    return this.photos.controls['photo'] as FormGroup;
  }
}
