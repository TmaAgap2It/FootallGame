import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent {
  textContent:string = `MailDetailComponent ${this.someOtherText()}`;//quote de la touche du 7
  textContent2=this.someOtherText();

  someOtherText():string{
    return 'Some other text'; //quote de la touche du 4
  }
}
