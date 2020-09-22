import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay, tap, shareReplay } from 'rxjs/operators';

import { Booking } from './vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings: Booking[];

  fetchBookings(): Observable<Booking[]> {
    return of(this.bookings).pipe(
      map((bookings) => bookings.reverse()),
      tap(() => console.log('Got Data')),
      delay(100),
      shareReplay()
    );
  }

  postBooking(booking: Booking): Observable<Booking> {
    this.bookings.push(booking);
    return of(booking).pipe(delay(1000), shareReplay());
  }

  cancelBooking(bookingId: number): Observable<Booking> {
    const idx = this.bookings.findIndex(
      (booking) => booking.bookingId === bookingId
    );
    if (idx === -1) {
      return null;
    }

    const cancelledBooking = this.bookings[idx];
    this.bookings.splice(idx, 1);
    return of(cancelledBooking).pipe(delay(500), shareReplay());
  }
}
