import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}
