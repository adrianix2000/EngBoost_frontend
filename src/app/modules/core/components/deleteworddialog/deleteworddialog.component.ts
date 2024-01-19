import { Component } from '@angular/core';
import { DeleteSessionDialogComponent } from '../delete-session-dialog/delete-session-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteworddialog',
  templateUrl: './deleteworddialog.component.html',
  styleUrls: ['./deleteworddialog.component.scss'],
})
export class DeleteworddialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteSessionDialogComponent>) {}
}
