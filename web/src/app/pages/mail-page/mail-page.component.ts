import { Component } from '@angular/core';
import { Mail } from 'src/app/model/mail';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.scss']
})
export class MailPageComponent {
  mySelectedMail?:Mail;

  setSelectedEmail(mail:Mail){
    this.mySelectedMail = mail;
  }
}
