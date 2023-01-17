import { Injectable } from "@angular/core";
import { Mail } from "../model/mail";

@Injectable({
    providedIn: 'root',
})
export class MailService {
    emails:Mail[] = [
        new Mail("new app WorkDay", "Please use WorkDay to enter your work times"),
        new Mail("Take five", "Let's go drink"),
    ];

    public getEmails():Mail[]{
        return this.emails;
    }

    public addEmail(mail:Mail){
        this.emails = [...this.emails, mail];
    }
}