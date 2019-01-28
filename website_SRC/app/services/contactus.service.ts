import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUs } from '../../app/Models/contact';


@Injectable({
    providedIn: 'root'
})
export class ContactusService {

    constructor(private httpClient: HttpClient) { }

    public addContactUs(contact: ContactUs): Observable<ContactUs[]> {
        return this.httpClient.post<ContactUs[]>("http://localhost:49440/contactUsForm", {
            "fName": contact.fName,
            "lName" : contact.lName,
            "phone" : contact.phone,
            "email" : contact.email,
            "formText" : contact.message
        });
    }

}
