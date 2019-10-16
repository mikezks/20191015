import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { tap, first } from 'rxjs/operators';

export interface CityFilter {
  from: string;
  to: string;
}

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  // flights: Flight[] = [];
  selectedFlight: Flight;
  basket: object = {
    "3": true,
    "5": true
  };

  get flights() {
    return this.flightService.flights;
  }

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.filter
      .pipe(
        tap(cityFilter => console.log('City Filter', cityFilter)),
        first()
      )
      .subscribe(
        cityFilter => {
          this.from = cityFilter.from;
          this.to = cityFilter.to;
        }
      );
  }

  updateFilter(): void {
    this.flightService.filter.next({
      from: this.from,
      to: this.to
    });
  }

  search(): void {
    this.updateFilter();

    this.flightService
      .find(this.from, this.to)
      .subscribe();
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

}
