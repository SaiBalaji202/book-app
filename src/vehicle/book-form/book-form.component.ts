import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookFormHelperService, FormOptions } from './book-form.helper.service';
import { map, pluck, take } from 'rxjs/operators';
import { BookingService } from './../bookings.service';
import { Router } from '@angular/router';
import { SpinnerService } from './../../shared/spinner/spinner.service';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  options$: Observable<FormOptions>;
  brands$: Observable<string[]>;
  models$: Observable<string[]>;
  fuelTypes: string[];

  constructor(
    private formService: BookFormHelperService,
    private bookService: BookingService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.initFormOptions();
  }

  initFormGroup(): void {
    this.bookForm = new FormGroup({
      customer: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        phone: new FormControl(null, [
          Validators.minLength(0),
          Validators.maxLength(10),
          Validators.pattern(/\d{10}/m),
        ]),
      }),
      vehicle: new FormGroup({
        regNo: new FormControl(null, Validators.required),
        brand: new FormControl(null, Validators.required),
        model: new FormControl(null, Validators.required),
        fuelType: new FormControl(null, Validators.required),
      }),
      bookingDate: new FormControl(null, [
        Validators.required,
        CustomValidators.invalidDate,
      ]),
      autoPicupAndDrop: new FormControl(false, Validators.required),
    });
  }

  initFormOptions(): void {
    this.options$ = this.formService.fetchFormOptions();
    this.brands$ = this.options$.pipe(
      map((formOptions) => Object.keys(formOptions))
    );
    this.fuelTypes = ['petrol', 'diesel'];
  }

  onBrandChange(brand: any): void {
    console.log(brand);
    this.models$ = this.options$.pipe(pluck(brand));
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const postObservable$ = this.bookService.postBooking({
      bookingId: new Date().getTime(),
      ...this.bookForm.value,
    });
    this.spinnerService.spinUntilCompleted(postObservable$).subscribe(
      () => {
        alert('Success');
        this.router.navigate(['']);
      },
      () => alert('Something Went Wrong')
    );
  }
}
