import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../pulpit/pulpit.component';
import { SessionCreateRequest } from 'src/app/modules/core/models/session.model';

@Component({
  selector: 'app-add-session-dialog',
  templateUrl: './add-session-dialog.component.html',
  styleUrls: ['./add-session-dialog.component.scss'],
})
export class AddSessionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; isshared: boolean; uploadFilePath: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedFilePath: string = '';

  onFileSelected(event: any): void {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      this.data.uploadFilePath = fileInput.files[0].name;
    } else {
      this.selectedFilePath = '';
    }
  }
}
