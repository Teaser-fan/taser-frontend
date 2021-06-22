import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  constructor(private toastrService: ToastrService) {}

  public showSuccess(message: string) {
    this.toastrService.success(message);
  }

  public showError(message: string) {
    this.toastrService.error(message);
  }

  public showInfo(message: string) {
    this.toastrService.info(message);
  }

  public showWarning(message: string) {
    this.toastrService.warning(message);
  }
}
