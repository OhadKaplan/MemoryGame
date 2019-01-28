import { Component,OnInit } from '@angular/core';
import { ContactUs } from '../../Models/contact';
import { ContactusService } from 'src/app/services/contactus.service';
import { LoginService } from 'src/app/services/login.service';
import { PlayerService } from 'src/app/services/player.service'
import { Form, NgForm } from '@angular/forms';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    public contactUs: ContactUs = new ContactUs();
    public diplaySuccessMsg:boolean;
    public diplayErrorMsg:boolean;
    public regPhone=/^[0-9-]+$/i;;
   

    constructor(private contactUsService: ContactusService,private loginService: LoginService,private playerService: PlayerService) { }

    ngOnInit (){
        this.getPlyerDetailsFromLogin();
    }

    public sendContactToAdmin(contactUsForm: NgForm) {
        this.contactUs.fName = this.contactUs.fName;
        this.contactUs.lName = this.contactUs.lName;
        this.contactUs.email = this.contactUs.email;
        this.contactUs.phone = this.contactUs.phone;
        this.contactUs.message = this.contactUs.message;

        try{
            this.contactUsService.addContactUs(this.contactUs).subscribe((data: any) => {
                contactUsForm.resetForm();
                this.diplaySuccessMsg = true;
                
            });
        }
        catch{
            this.diplaySuccessMsg = true;
        }

    }

    private getPlyerDetailsFromLogin() {
        if(this.loginService.getLogInState()){
            this.contactUs.player =this.loginService.getLoggedPlayerId();
            let observable = this.playerService.getPlayerInfo(this.contactUs.player).subscribe(pi => {
                this.contactUs.fName = pi.fullName;
                this.contactUs.lName = pi.fullName;
                this.contactUs.email = pi.email;
            });
        }
        
    }

    public chekForPhonePattern(val: string): boolean {
        return this.regPhone.test(val);
    }
}
