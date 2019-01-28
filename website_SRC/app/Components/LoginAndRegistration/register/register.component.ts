import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player';
import { PlayerService } from 'src/app/services/player.service';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    private player: Player = new Player();
    public passRepeat: string = "";
    public borderColor: string;
    public regUser = /^[a-zA-Z0-9]+$/i;
    public errorMsg: string;
    public userNameError: boolean;

    public emptyFullName: boolean;


    constructor(private playerService: PlayerService, private loginService: LoginService) { }

    public ngOnInit() {

    }

    public addNewPlayer(): void {

        //get form data
        this.player.fullName = this.player.fullName;
        this.player.userName = this.player.userName;
        this.player.pW = this.player.pW;
        this.player.email = this.player.email;

        //check data validation
        if (this.checkRegistrationData()) {
            try {
                this.playerService.addNewPlayer(this.player).subscribe((data: any) => {
                       
                    sessionStorage.setItem("LoggedIn", data.id);
                    this.errorMsg = "הרשמה עברה בהצלחה!!!";
                    window.location.href = "/home";
                });

            }
            catch{
                this.errorMsg = "שגיאה לא צפויה ברישום שחקן חדש";
            }

        }
    }

    private checkRegistrationData(): boolean {
        if (!this.chekIfUserNameinEnglish(this.player.userName)) {
            this.errorMsg = "שם משתמש לא תקין";
            return false;
        }
        if (!this.checkPassword()) {
            this.errorMsg = "סיסמא לא תואמת בשני השדות - יש לבדוק התאמה בין שתי הססמאות";
            return false;
        }

        return true;
    }

    public checkIfUserNameExist(val: string): void {
        this.loginService.checkForUserName(val).subscribe((un: any) => {
            this.userNameError = true;
        }, (err) => {
            console.log(err);
            this.userNameError = false;
        });

    }

    public chekIfUserNameinEnglish(val: string): boolean {
        return this.regUser.test(val);
    }

    public chekIfPasswordInEnglish(val: string): boolean {
        return this.regUser.test(val);
    }

    public onPasswordKeyUp(val: string) {
        this.passRepeat = val;
        if (this.checkPassword()) {
            this.borderColor = "green";
        } else {
            this.borderColor = "red";
        }

    }

    public checkPassword(): boolean {
        return this.player.pW == this.passRepeat ? true : false;
    }
}

