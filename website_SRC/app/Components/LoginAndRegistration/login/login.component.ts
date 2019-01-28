import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../services/login.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {


    @Input()
    public showLogin: string;

    constructor(private loginService: LoginService) { }

    public userLogin(v1: string, v2: string): void {

        this.loginService.login(v1, v2).subscribe((player: any) => {
            sessionStorage.setItem("LoggedIn", player.id);
        }, (err) => {
            
            let str = err.statusText;
            alert("שגיאת התחברות - נסה שנית"+str);
        });
    }

    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }

    public closeLoginPopup() {
        this.showLogin = "hidden";
    }
}



