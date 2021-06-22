import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  public showSuccessMessage(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      showConfirmButton: true,
    });
  }

  public showErrorMessage(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      showCloseButton: true,
    });
  }

  public showWarningMessage(
    title: string,
    text: string,
    isConfirmBtn: boolean,
    isCancelBtn: boolean
  ) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showConfirmButton: isConfirmBtn,
      showCancelButton: isCancelBtn,
    });
  }
}
