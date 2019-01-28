import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../../Models/feedback';
import { FeedbacksService } from '../../../services/feedbacks.service';
import { PlayerService } from '../../../services/player.service';
import { Player } from 'src/app/Models/player';
import { LoginService } from '../../../services/login.service';



@Component({
    selector: 'app-newfeedback',
    template: '<app-newfeedback-component [playerName]="playerName" (onNewFeedbackData)="postFeedback($event)"></app-newfeedback-component>',
    styleUrls: [],
})

export class NewfeedbackComponent implements OnInit {

    public feedback: Feedback = new Feedback();
    public playerName: string;
    
    

    constructor(
        private feedbackService: FeedbacksService,
        private playerService: PlayerService,
        private loginService: LoginService) { }

    ngOnInit(): void {
        this.playerName = "";        
        let observable = this.playerService.getPlayerInfo(this.loginService.getLoggedPlayerId()).subscribe(p => {          
            this.playerName = p.userName; //UserName by the returned tag from JSON
        });
    }


    public postFeedback($event):void {

        this.feedback.player = this.loginService.getLoggedPlayerId();
        this.feedback.fbText = $event;

        this.feedbackService.addNewFeedback(this.feedback).subscribe((data: any) => {
            this.feedbackService.runListener();//run listener - change has beed made           
        });
    }
}
