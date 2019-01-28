import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }

    public login(val1:String,val2:String):Observable<Player>{
        return this.httpClient.post("http://localhost:49440/playerLogin",{          
                "userName":val1,
                "pW":val2            
        });
    }

}
