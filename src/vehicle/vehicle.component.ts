import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './../shared/spinner/spinner.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  providers: [SpinnerService],
})
export class VehicleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
