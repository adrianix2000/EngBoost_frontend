import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../pulpit/pulpit.component';

@Component({
  selector: 'app-add-session-dialog',
  templateUrl: './add-session-dialog.component.html',
  styleUrls: ['./add-session-dialog.component.scss'],
})
export class AddSessionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
