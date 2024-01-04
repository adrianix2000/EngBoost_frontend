import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-close',
  templateUrl: './dialog-close.component.html',
  styleUrls: ['./dialog-close.component.scss'],
})
export class DialogCloseComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data.title);
  }
}
