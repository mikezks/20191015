import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      // FlightBookingModule,
      RouterModule.forRoot(APP_ROUTES, {
         preloadingStrategy: PreloadAllModules
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
