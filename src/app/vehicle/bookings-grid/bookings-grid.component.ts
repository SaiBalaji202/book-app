import { Component, OnInit } from '@angular/core';
import { BookingService } from './../bookings.service';
import { Observable } from 'rxjs';
import { Booking } from '../vehicle.model';
import { SpinnerService } from './../../shared/spinner/spinner.service';

@Component({
  selector: 'app-bookings-grid',
  templateUrl: './bookings-grid.component.html',
  styleUrls: ['./bookings-grid.component.scss'],
})
export class BookingsGridComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  constructor(
    private bookService: BookingService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  onDelete(bookingId: number): void {
    const cancelObservable$ = this.bookService.cancelBooking(bookingId);
    this.spinnerService.spinUntilCompleted(cancelObservable$).subscribe(
      (d) => console.log(d),
      (err) => alert('Something Went Wrong')
    );
  }

  reloadData(): void {
    const allBookings$ = this.bookService.fetchBookings();
    this.bookings$ = this.spinnerService.spinUntilCompleted(allBookings$);
  }
}
