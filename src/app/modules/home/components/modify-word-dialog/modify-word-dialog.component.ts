import { Component, Inject } from '@angular/core';
import { AddSessionDialogComponent } from '../add-session-dialog/add-session-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-word-dialog',
  templateUrl: './modify-word-dialog.component.html',
  styleUrls: ['./modify-word-dialog.component.scss'],
})
export class ModifyWordDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { polishmean: string; englishmean: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
