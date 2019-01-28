import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
    providedIn: 'root'
})
export class FeedbacksService {

    public newFeedbackEvent = new Subject(); //EVENT אובייקט שמנהל את ההאזנה ל
    public newFeedbackObs = this.newFeedbackEvent.asObservable();//Observable

    constructor(private httpClient: HttpClient) { }

    public getAllFeedbacks(): Observable<Feedback[]> {
        return this.httpClient.get<Feedback[]>("http://localhost:49440/feedbacks");
    }

    public getTopFeedbacks(): Observable<Feedback[]> {
        return this.httpClient.get<Feedback[]>("http://localhost:49440/topfeedbacks");
    }

    public runListener(){
        this.newFeedbackEvent.next();
    }

    public addNewFeedback(feedbackIn: Feedback): Observable<Feedback> { //TODO parameter Name
        return this.httpClient.post('http://localhost:49440/feedbacks/', {
            "player": feedbackIn.player,
            "text": feedbackIn.fbText
        });
        
    }

}
