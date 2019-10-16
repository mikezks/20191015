import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Flight } from '../../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const staticFlights = [
      {
        id: 999,
        from: 'Barcelona',
        to: 'Madrid',
        date: (new Date()).toISOString(),
        delayed: false
      }
    ];

    //return of(staticFlights);

    return this.http
      .get<Flight[]>(url, { headers, params })
      .pipe(
        //tap(flights => console.log('I\'m the FlightService', flights))
      );
  }
}
