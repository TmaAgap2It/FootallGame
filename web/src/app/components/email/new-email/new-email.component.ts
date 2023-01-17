import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Mail } from 'src/app/model/mail';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.scss']
})
export class NewEmailComponent {
  constructor(public dialogRef: MatDialogRef<NewEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public newEmail: Mail) { } 


  
}
