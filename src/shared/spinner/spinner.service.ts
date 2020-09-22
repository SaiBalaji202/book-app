import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

export class SpinnerService {
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spin$: Observable<boolean> = this.spinnerSubject.asObservable();

  spinUntilCompleted<T>(obs: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.startSpin()),
      concatMap(() => obs),
      finalize(() => this.stopSpin())
    );
  }

  startSpin(): void {
    this.spinnerSubject.next(true);
  }

  stopSpin(): void {
    this.spinnerSubject.next(false);
  }
}
