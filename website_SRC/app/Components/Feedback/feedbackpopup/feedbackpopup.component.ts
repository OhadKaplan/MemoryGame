import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../../Models/feedback';
import { FeedbacksService } from '../../../services/feedbacks.service';
import { PlayerService } from '../../../services/player.service';
import { Player } from 'src/app/Models/player';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-feedbackpopup',
  templateUrl: './feedbackpopup.component.html',
  styleUrls: ['./feedbackpopup.component.css']
})
export class FeedbackpopupComponent implements OnInit {

    public feedback: Feedback = new Feedback();
    public playerName: string;
    public players: Player[] = new Array<Player>();
    

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


    public postFeedback(): void {

        this.feedback.player = this.loginService.getLoggedPlayerId();
        this.feedback.fbText = this.feedback.fbText;

        this.feedbackService.addNewFeedback(this.feedback).subscribe((data: any) => {
            window.location.reload();
        });
    }

}
