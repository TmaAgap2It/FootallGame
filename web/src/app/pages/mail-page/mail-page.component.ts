import { Component } from '@angular/core';
import { Mail } from 'src/app/model/mail';
import { MailService } from 'src/app/services/mail-service';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.scss']
})
export class MailPageComponent {
  mySelectedMail?:Mail;

  constructor(private mailService:MailService){}

  setSelectedEmail(mail:Mail){
    this.mySelectedMail = mail;
  }

  setNewEmail(mail:Mail){
    this.mailService.addEmail(mail);
  }
}
