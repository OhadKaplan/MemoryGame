import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-feedbacks',
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
    public showLogin: string = "hidden";
    constructor(private loginService:LoginService) { }

    ngOnInit() {
        
    }


    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }
    
    public displayLogin(){        
        if(!this.loginService.getLogInState()){
            this.showLogin = "visible";
        }else{
            alert("Error - please refresh page!");
        }
    }
}
