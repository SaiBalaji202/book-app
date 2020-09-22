import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsGridComponent } from './bookings-grid/bookings-grid.component';
import { VehicleComponent } from './vehicle.component';
import { BookFormComponent } from './book-form/book-form.component';
import { VehicleRoutingModule } from './vehicle.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VehicleComponent, BookFormComponent, BookingsGridComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VehicleRoutingModule,
    SharedModule,
  ],
})
export class VehicleModule {}
