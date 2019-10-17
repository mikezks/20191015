import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityValidatorDirective } from './validators/city-validator.directive';



@NgModule({
  declarations: [
    CityPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CityPipe,
    FormsModule,
    ReactiveFormsModule,
    CityValidatorDirective
  ]
})
export class SharedModule { }
