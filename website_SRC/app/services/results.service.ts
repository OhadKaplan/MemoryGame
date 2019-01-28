import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
    providedIn: 'root'
})
export class ResultsService {

    constructor(private httpClient: HttpClient) { }

    public getAllResults(): Observable<Result[]> {
        return this.httpClient.get<Result[]>("http://localhost:49440/results");
    }

    public getTopResults(): Observable<Result[]> {
        return this.httpClient.get<Result[]>("http://localhost:49440/results/top");
    }

    public addNewResult(resultIn: Result): Observable<Result> { //TODO parameter Name
        return this.httpClient.post('http://localhost:49440/results/', {
            "player": resultIn.player,
            "takenDate": resultIn.takenDate,
            "duration": resultIn.duration,
            "steps": resultIn.steps
        });
    }
}
