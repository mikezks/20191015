import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .get<Flight[]>(url, { headers, params })
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error on loading Flights', err)
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

}
