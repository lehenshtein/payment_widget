import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {paymentwallProjectKey, paymentwallUrl} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(public http: HttpClient) { }

  getCountry(): Observable<any> {
    return this.http.get(`${paymentwallUrl}rest/country?key=${paymentwallProjectKey}&uid=lehenshtein@gmail.com`);
  }
  getPaymentMethod(countryCode): Observable<any> {
    return this.http.get(`${paymentwallUrl}payment-systems/?key=${paymentwallProjectKey}&country_code=${countryCode}`);
  }
}
