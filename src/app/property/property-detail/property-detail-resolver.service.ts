import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/Services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private router: Router, private houseService: HousingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> | Promise<Property> {
    const propId = route.params['id']
    return this.houseService.GetProperty(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/'])
        throw Error(error)
      })
    );
  }
}
