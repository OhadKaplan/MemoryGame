import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-loginbar',
    templateUrl: './loginbar.component.html',
    styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {

    public showLogin: string = "hidden";
    public buttonState:string;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        
    }


    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }

    public clickButton() {
        if(!this.isLoggedin()){
            this.showLogin = "visible";
        }else{
            this.loginService.logout();
            window.location.href="/home"
            this.showLogin = "hidden";            
        }
        this.ngOnInit();
    }
}
