import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export enum ConfirmDialogResult {
  CANCEL,
  CONFIRM,
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel = 'Cancel';
  @Input() hideCancel = false;
  // tslint:disable-next-line: no-output-native
  @Output() result = new EventEmitter<ConfirmDialogResult>();

  ConfirmResult = ConfirmDialogResult;
  resultData: ConfirmDialogResult;

  constructor() {}

  ngOnInit(): void {}

  handleClick(result: ConfirmDialogResult): void {
    this.resultData = result;
  }
}
