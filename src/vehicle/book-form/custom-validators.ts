import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidDate(ctrl: FormControl): { [key: string]: boolean } {
    const currDate = new Date();
    currDate.setHours(0, 0, 0, 0);

    const selectedDate = new Date(ctrl.value);
    selectedDate.setHours(0, 0, 0, 0);

    return selectedDate >= currDate ? null : { invalidDate: true };
  }
}
