import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { Feedback } from '../../../Models/feedback';


@Component({
    selector: 'app-feedbackslist',
    templateUrl: './feedbackslist.component.html',
    styleUrls: ['./feedbackslist.component.css']
})
export class FeedbackslistComponent implements OnInit {

    private feedbacks:Feedback[];

    constructor(private feedbacksService: FeedbacksService) 
    {
        this.feedbacksService.newFeedbackObs.subscribe(() => {//רישום לאירוע שמודיע על שינוי שבוצע בהארות
            this.loadFeedbacks();
        });
     }

    ngOnInit(): void {

        this.loadFeedbacks();
    }

    loadFeedbacks() {
        let observable = this.feedbacksService.getAllFeedbacks().subscribe(fb => {
            this.feedbacks = fb;
        });
    }
}
