import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { By } from '@angular/platform-browser';
import { format } from 'util';

describe('Unit-Test: FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FlightBookingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should have a disabled search button w/o params', fakeAsync(() => {
    tick();

    const from = fixture
      .debugElement
      .query(By.css('input[name=from]'))
      .nativeElement;

    from.value = '';
    from.dispatchEvent(new Event('input'));
    
    const to = fixture
      .debugElement
      .query(By.css('input[name=to]'))
      .nativeElement;

    to.value = '';
    to.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    tick();

    const disabled = fixture
      .debugElement
      .query(By.css('button'))
      .properties['disabled'];

    expect(disabled).toBeTruthy();
  }));
});
