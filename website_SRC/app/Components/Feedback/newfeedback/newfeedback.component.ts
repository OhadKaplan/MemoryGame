import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feedback } from '../../../Models/feedback';
import { NgForm } from '@angular/forms';




@Component({
    selector: 'app-newfeedback-component',
    templateUrl: './newfeedback.component.html',
    styleUrls: ['./newfeedback.component.css'],

})

export class NewfeedbackComponent {
 
   

    @Input()
    public playerName: string;

    @Output()
    public onNewFeedbackData: EventEmitter<string> = new EventEmitter<string>();


    // public feedback: Feedback = new Feedback();
    public fbText: string;
    public screenMessage:string;
   
    public postFeedback(formName:NgForm): void {
        try {
            this.onNewFeedbackData.emit(this.fbText); 
            this.screenMessage = "פרגון נשלח בהצלחה! - תודה";
            formName.resetForm();
        }
        catch{
            this.screenMessage="Error";
        }        
    }

    public clearMessage(){
        this.screenMessage="";
    }
}
