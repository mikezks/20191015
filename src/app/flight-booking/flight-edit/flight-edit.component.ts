import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../shared/validators/validate-city';
import { delay } from 'q';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  showDetail: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.id = +params.get('id');
          this.showDetail = !!params.get('showDetail');
        }
      );

    this.editForm = this.fb.group({
      id: [
        1
      ],
      from: [
        'Graz',
        [
          Validators.required,
          validateCity
        ]
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          validateCityWithParams(['Wien', 'Berlin'])
        ]
      ],
      date: [
        (new Date()).toISOString()
      ]
    });

    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);

    this.editForm.valueChanges
      .subscribe(console.log);
  }

  save(): void {
    console.log(this.editForm.value);
  }
}
