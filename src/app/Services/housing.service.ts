import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-list/IProperty.interface';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>('https://localhost:44361/api/City');
  }

  GetProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        //throw new Error('some error occured');
        console.log("popyy: ",propertiesArray.find(p => p.id === id) as unknown as Property)
        return propertiesArray.find(p => p.id === id) as unknown as Property
      })
    )
  }

  getAllProperties(sellRent?: number): Observable<Property[]> {
    return this.http.get("data/properties.json").pipe(
      map(
        data => {
          const propertyArray: Array<Property> = [];
          const localProperties = JSON.parse(localStorage.getItem('newProp') as string)

          if (localProperties) {
            for (const id in localProperties) {
              if (sellRent) {
                if (localProperties.hasOwnProperty(id) && localProperties[id].sellRent === sellRent) {
                  propertyArray.push(localProperties[id]);
                }
              } else {
                propertyArray.push(localProperties[id]);
              }
            }
          }
          for (const id in data) {
            if (sellRent) {
              if (data.hasOwnProperty(id) && data[id].sellRent === sellRent) {
                propertyArray.push(data[id]);
              } else {
                propertyArray.push(data[id]);
              }
            }
          }
          return propertyArray;
        })
    );
  }

  // add new property to array if newrop already exist in local storage
  AddProperty(property: Property) {
    let newProp = [property]
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp') as string)]
    }
    localStorage.setItem('newProp', JSON.stringify(newProp))
  }

  NewPropId() {
    if (localStorage.getItem('PID')) {
      return +(localStorage.getItem('PID') as string) + 1
    } else {
      localStorage.setItem('PID', '101')
      return 101;
    }
  }
}
