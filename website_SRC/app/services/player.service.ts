import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../Models/player';


@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    
    constructor(private httpClient: HttpClient) { }

    public addNewPlayer(p: Player): Observable<Player> {
        return this.httpClient.post("http://localhost:49440/players", {
            "fullName": p.fullName,
            "userName": p.userName,
            "pW": p.pW,
            "email": p.email,
            "bDate": p.bDate
        });
    }

    public getPlayerInfo(id:number): Observable<Player>{
        return this.httpClient.get(`http://localhost:49440/players/${id}`);
    }

}
