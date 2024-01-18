import { Component, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-session-dialog',
  templateUrl: './delete-session-dialog.component.html',
  styleUrls: ['./delete-session-dialog.component.scss'],
})
export class DeleteSessionDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteSessionDialogComponent>) {}
}
