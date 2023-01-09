import { Injectable } from "@angular/core";
import { Mail } from "../model/mail";

@Injectable({
    providedIn: 'root',
})
export class MailService {
    public getEmails():Mail[]{
        return [
            new Mail("new app WorkDay", "Please use WorkDay to enter your work times"),
            new Mail("Take five", "Let's go drink"),
        ];
    }
}