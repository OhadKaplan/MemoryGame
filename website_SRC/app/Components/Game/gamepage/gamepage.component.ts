import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { ImagesService } from 'src/app/services/images.service';
import { ImagesPaths } from 'src/app/Models/ImagesPaths';
import { Image } from 'src/app/Models/Image';

@Component({
    selector: 'app-gamepage',
    templateUrl: './gamepage.component.html',
    styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit {

   
    public showLogin: string = "hidden";
    public currentMoves:number;
    private images: Image[] = new Array<Image>();
    public garfeildImgFullPath:string;

   
    public steps:number =0;
    
    public gameStatus:boolean =false;

    constructor(private loginService: LoginService,private imagesService:ImagesService) { }

    ngOnInit() {
        let observable = this.imagesService.getImages().subscribe
        (logo=>{
            this.images = logo.filter(f=>f.imgTypeId===5);
            this.garfeildImgFullPath = ImagesPaths.General+ this.images[1].imgName;
        });

    }

    public onMovesUpdate(moves:number){
        this.steps = moves;
    }

    public onSetGameStatus(gameState:boolean){
        this.gameStatus = gameState;
    }

    public isLoggedin(): boolean {
        return this.loginService.getLogInState();
    }

    public displayLogin(){        
        if(!this.loginService.getLogInState()){
            this.showLogin = "visible";
        }else{
            alert("Error - please refresh page!");
        }
    }


}




