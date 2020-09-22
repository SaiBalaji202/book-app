import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface FormOptions {
  [key: string]: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BookFormHelperService {
  constructor(private http: HttpClient) {}

  fetchFormOptions(): Observable<FormOptions> {
    return this.http
      .get<FormOptions>('assets/form-options.json')
      .pipe(shareReplay());
  }
}
