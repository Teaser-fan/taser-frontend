import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}

  public show() {
    this.ngxSpinnerService.show('taser-spinner', {
      bdColor: 'rgba(0, 0, 0, 0.8)',
      fullScreen: true,
      size: 'large',
      type: 'ball-scale-ripple',
    });
  }

  public hide() {
    this.ngxSpinnerService.hide();
  }
}
