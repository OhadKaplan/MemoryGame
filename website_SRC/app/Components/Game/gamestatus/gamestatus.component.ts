import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { Result } from 'src/app/models/result';
import { LoginService } from '../../../services/login.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-gamestatus',
    templateUrl: './gamestatus.component.html',
    styleUrls: ['./gamestatus.component.css']
})
export class GamestatusComponent {

    public result: Result = new Result();
    public displayTimer: string = "00:00:00";
    public diplaySuccessMsg: boolean = false;


    constructor(private resultService: ResultsService, private loginService: LoginService, private timerService: TimerService) {
        this.timerService.timerState.subscribe(t => {
            this.displayTimer = t;

        });
    };

    @Input()
    gameSteps: number;

    @Input()
    gameStatus: boolean;

    public sendResult(): void {
        try {
            this.result.player = this.loginService.getLoggedPlayerId();
            this.result.takenDate = new Date();
            this.result.duration = this.displayTimer;
            this.result.steps = this.gameSteps;
            this.resultService.addNewResult(this.result).subscribe((data: any) => {
            });
            setTimeout(()=>{
                this.diplaySuccessMsg = true;
            },1000);
        }
        catch{
            alert("שגיאה בלתי צפויה - נא לנסות במועד מאוחר יותר");
        }
        
    }
}
