import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../Models/player';

@Injectable({
    providedIn: 'root'
})
export class LoginService {


    constructor(private httpClient: HttpClient) { }

    public login(val1: String, val2: String): Observable<Player> {
        return this.httpClient.post("http://localhost:49440/playerLogin", {
            "userName": val1,
            "pW": val2
        });
    }

    public checkForUserName(val:string):Observable<Player>{
        return this.httpClient.get(`http://localhost:49440/playerUN/${val}`);
    }

    public getLogInState(): boolean {
        if (sessionStorage.getItem("LoggedIn")) {
            return true;
        }
        return false;
    }

    public getLoggedPlayerId(): number {
        return Number(sessionStorage.getItem("LoggedIn"));
    }

    public logout() {
        sessionStorage.clear(); 
    }
}
