import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { Feedback } from '../../../Models/feedback';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-topfeedbacks',
    templateUrl: './topfeedbacks.component.html',
    styleUrls: ['./topfeedbacks.component.css']
})
export class TopfeedbacksComponent implements OnInit {
    private feedbacks: Feedback[];
    public showLogin: string = "hidden";

    constructor(private feedbacksService: FeedbacksService,private loginService:LoginService) { }

    ngOnInit(): void {
        let observable = this.feedbacksService.getTopFeedbacks().subscribe(fb => {
            this.feedbacks = fb;
        });
    }
    
    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }

    public displayLogin(){        
        if(!this.isLoggedin()){
            this.showLogin = "visible";
        }else{
            alert("Error - please refresh page!");
        }
    }
}
