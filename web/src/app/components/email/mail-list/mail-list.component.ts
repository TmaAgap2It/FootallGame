import { Component, EventEmitter, Output } from '@angular/core';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Mail } from 'src/app/model/mail';
import { MailService } from 'src/app/services/mail-service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent {
  @Output() selectedMail: EventEmitter<Mail> = new EventEmitter();

  constructor(public mailService:MailService){ }

  selectEmail(mail:Mail){
    this.selectedMail.emit(mail);
  }
}
