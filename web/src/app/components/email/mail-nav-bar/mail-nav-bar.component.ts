import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEmailComponent } from '../new-email/new-email.component';
import { Mail } from 'src/app/model/mail';

@Component({
  selector: 'app-mail-nav-bar',
  templateUrl: './mail-nav-bar.component.html',
  styleUrls: ['./mail-nav-bar.component.scss']
})
export class MailNavBarComponent {
  @Output() newEmail: EventEmitter<Mail> = new EventEmitter();
  
  constructor(public dialog: MatDialog){}
  
  newMail(){
    const dialogRef = this.dialog.open(NewEmailComponent, {
      width:'80%',
      data:new Mail('', '')
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){return;}
      
      this.newEmail.emit(result);
    });
  }
}
