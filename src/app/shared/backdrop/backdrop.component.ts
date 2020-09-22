import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent implements OnInit {
  @Output() clicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.clicked.emit();
  }
}
