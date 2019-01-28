import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/Models/Card';
import { Image } from 'src/app/Models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { LogicService } from 'src/app/services/logic.service';
import { ImagesPaths } from 'src/app/Models/ImagesPaths';
import { TimerService } from 'src/app/services/timer.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    @Output()
    public stepsCounterEmitter: EventEmitter<number> = new EventEmitter<number>();
    @Output()
    public gameStatus: EventEmitter<boolean> = new EventEmitter<boolean>();


    private stepsCounter: number;
    private cardsMatrix: Array<Card[]> = new Array<Card[]>(4);
    private images: Image[] = new Array<Image>();
    private load: boolean = false;//manage async screen display
    public randomImgArray: Image[] = new Array<Image>(16);
    public selectionArray: number[] = new Array<number>(2);
    public backImg: string = "../../../../assets/Images/Cards/Background/0127.png";
    public cardBackground = "white";
    public isHidden: number = 1;
    // public selectionA:number; //TODO - אולי במקום מערך
    // public selectionB:number; //TODO - אולי במקום מערך

    public gameStatusLocal: boolean = false;

    public testC: number = 0;


    constructor(private imageService: ImagesService, private locigService: LogicService, private timerService: TimerService) { }

    ngOnInit() {

        //init one domention array to matrix Array
        for (let i = 0; i < this.cardsMatrix.length; i++) {
            this.cardsMatrix[i] = new Array<Card>(4);
        }
        let observable = this.imageService.getImages().subscribe //Get Images For Array
            (imgs => {
                this.images = imgs;
                this.load = true;
                this.suffleImagesToMatrixArray();
                this.initMatrix();
            });
        
    }

    //-------------------initNewGame----------------

    public initNewGame() {  //Initiailze game
        if (!this.gameStatusLocal) {
            this.gameStatus.emit(true);
            this.initTimer();
            this.stepsCounter = 0;
            
            this.stepsCounterEmitter.emit(this.stepsCounter);
            this.initSelection();
        }

    }


    //-------------------init object for the board and more..---------------------
    private initTimer() {
        if (!this.gameStatusLocal) {
            this.timerService.startInterval();
            this.gameStatusLocal = true;
        }
    }

    public initMatrix() {  //Initiailze cards board
        let counter: number = 0;
        let tempImagesArr: Image[] = this.images.filter(f => f.imgTypeId === 2); //filter to get only back side card image
        for (let i = 0; i < this.cardsMatrix.length; i++) {
            for (let j = 0; j < this.cardsMatrix[i].length; j++) {
                this.cardsMatrix[i][j] = new Card(this.randomImgArray[counter].id, ImagesPaths.Back + this.randomImgArray[counter].imgName, 1);
                counter++;
            }
        }
    }

    //init user selection
    public initSelection() {
        for (let i = 0; i < this.selectionArray.length; i++) {
            this.selectionArray[i] = 99;
        }
    }

   
    //suffle the Images To the main Matrix Array
    public suffleImagesToMatrixArray() { //initiate and suffle imges to the matrix array
        let tempImagesArr: Image[] = this.images.filter(f => f.imgTypeId === 2);
        let randNumber: number;
        let tempImgId: number;
        let counterArray: number[] = new Array<number>(8);

        for (let j = 0; j < counterArray.length; j++) {
            counterArray[j] = 0;
        }

        for (let i = 0; i < this.randomImgArray.length; i++) {
            do {

                randNumber = this.locigService.getRandom(0, 7);
            } while (counterArray[randNumber] == 2);

            this.randomImgArray[i] = tempImagesArr[randNumber];
            counterArray[randNumber]++;
        }
    }

    //------------main Board logigs!!!--- יודע אפשר היה לעשות את זה יותר נקי ומונחה אובייקטים , אבל זה מה שהזמן אפשר לי
    public clickOnCard(i: number, j: number) {
        this.initNewGame();
        if (this.cardsMatrix[i][j].state == 1) {  //check card stat=front
            switch (this.chackSelectionArrayStatus()) {
                case (0): {
                    
                    this.flipCard(i, j, 2); //i,j -indexes and new cards tate
                    this.updateSelectionArray(0, i, j);//index of selection array, i,j -indexes of the card
                    this.updateStepCounter();
                    
                    break;
                }
                case (1): {
                    
                    this.flipCard(i, j, 2);
                    this.updateSelectionArray(1, i, j);
                    this.updateStepCounter();
                    this.checkTwoCard();
                    if (this.locigService.isEndOfGame(this.cardsMatrix)) { //check if all cards filped..
                        this.timerService.stopTimer();
                        this.gameStatus.emit(false);
                    }
                    break;
                }
                default: {
                    alert("שגיאה: אנא המתן עד להיפוך או הסתרת הקלפים שנבחרו");
                }
            }
        }
    }

    //chack Selection Array Status
    public chackSelectionArrayStatus(): number {  //return selection array state
        

        if (this.selectionArray[0] == 99 && this.selectionArray[1] == 99) {
            return 0;
        } else if (this.selectionArray[0] != 99 && this.selectionArray[1] == 99) {
            return 1;
        }
        return 2;
    }

    //flip card and update selection status
    public flipCard(i: number, j: number, stateIn: number): void {
        this.cardsMatrix[i][j].state = stateIn; //מעדכן מצב של קלף
    }

    public callFlipCards(x: number) {
        setTimeout(() => {
            this.flipOrHideTwoCards(x);
            this.initSelection();
        }, 1000);
    }

    //update Selection array with selection
    public updateSelectionArray(selectionIndex: number, i: number, j: number) {//מקבל הוראה לאפס בחירות - בהתאם  לצורך  או לאפס מערך או 
        this.selectionArray[selectionIndex] = this.cardsMatrix[i][j].id;
    }

    //check if the two selected cards are equal or not
    public checkTwoCard() {
        this.selectionArray[0] == this.selectionArray[1] ? this.callFlipCards(3) : this.callFlipCards(1);
    }



    public flipOrHideTwoCards(action: number) { //actio: 1 = flip to front 3= hide card
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.cardsMatrix[i][j].id == this.selectionArray[0]) {
                    this.cardsMatrix[i][j].state = action;
                }
                if (this.cardsMatrix[i][j].id == this.selectionArray[1]) {
                    this.cardsMatrix[i][j].state = action;
                }
            }
        }
    }



    //send num of steps top status component
    public updateStepCounter(): void {
        this.stepsCounter++;
        this.stepsCounterEmitter.emit(this.stepsCounter);
    }

     //get front card image details
     public getFrontImg(): string {
        let imgObj: Image[] = this.images.filter(f => f.imgTypeId === 1);
        return ImagesPaths.Front + imgObj[0].imgName;
    }

    public getHidden(i, j): number {
        if (this.cardsMatrix[i][j].state == 3) {
            return 0;
        }
    }

    public getImage(i: number, j: number): string {
        if (this.cardsMatrix[i][j].state == 3) {
            return "hidden";
        } else if (this.cardsMatrix[i][j].state == 1) {
            return this.getFrontImg();
        } else {
            return this.cardsMatrix[i][j].imageName;
        }

    }
}


