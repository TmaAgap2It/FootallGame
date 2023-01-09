import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mail } from 'src/app/model/mail';

@Component({
  selector: 'app-mail-list-item',
  templateUrl: './mail-list-item.component.html',
  styleUrls: ['./mail-list-item.component.scss']
})
export class MailListItemComponent {
  @Input() mail!:Mail;

  @Output() selectedMail: EventEmitter<Mail> = new EventEmitter();

  selectEmail(){
    this.selectedMail.emit(this.mail);
  }
}
