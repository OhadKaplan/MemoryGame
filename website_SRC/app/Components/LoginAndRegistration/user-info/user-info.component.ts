import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { PlayerService } from '../../../services/player.service'
import { Player } from '../../../Models/player';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    public player:Player;
    public fullName:string;

    constructor(private loginService: LoginService, private playerService: PlayerService) { }
    
    ngOnInit(): void {

        let observable = this.playerService.getPlayerInfo(this.loginService.getLoggedPlayerId()).subscribe(pi => {
            this.fullName = pi.fullName;
        });
    }

    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }
}
