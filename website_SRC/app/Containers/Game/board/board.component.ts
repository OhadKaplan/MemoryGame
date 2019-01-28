// import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { Card } from 'src/app/Models/Card';
// import { Image } from 'src/app/Models/Image';
// import { ImagesService } from 'src/app/services/images.service';
// import { LogicService } from 'src/app/services/logic.service';
// import { ImagesPaths } from 'src/app/Models/ImagesPaths';

// @Component({
//   selector: 'app-board',
//   template: '<app-board-component></app-board-component>',
//   styleUrls: ['./board.component.css']
// })
// export class BoardComponent implements OnInit {

//     @Output()
//     public stepsCounterEmitter: EventEmitter<number> = new EventEmitter<number>();
//     @Output()
//     public gameStatus:EventEmitter<boolean> = new EventEmitter<boolean>();
//     private stepsCounter:number;
//     private cardsMatrix: Array<Card[]> = new Array<Card[]>(4);
//     private images: Image[] = new Array<Image>();
//     private load: boolean = false;
//     public randomImgArray: Image[] = new Array<Image>(16);
//     public selectionArray: number[] = new Array<number>(2);    
//     public backImg: string = "../../../../assets/Images/Cards/Background/0127.png";


//     constructor(private imageService: ImagesService, private locigService: LogicService) { }

//     ngOnInit() {
//         this.initNewGame();
//         for (let i = 0; i < this.cardsMatrix.length; i++) {
//             this.cardsMatrix[i] = new Array<Card>(4);
//         }
//         console.log(this.load);
//         let observable = this.imageService.getImages().subscribe
//             (imgs => {
//                 this.images = imgs;
             
//                 this.load = true;
//                 this.suffleImagesToMatrixArray();
//                 this.initMatrix();
              

//             });
//         this.locigService.initSelection();
//     }

//     public initNewGame(){
//         this.stepsCounter=0;
//         this.gameStatus.emit(true);
//         this.stepsCounterEmitter.emit(this.stepsCounter);
//     }

//     public initMatrix() {

//         let counter: number = 0;
//         let tempImagesArr: Image[] = this.images.filter(f => f.imgTypeId === 2); //filter to get only back side card image
//         for (let i = 0; i < this.cardsMatrix.length; i++) {
//             for (let j = 0; j < this.cardsMatrix[i].length; j++) {
//                 this.cardsMatrix[i][j] = new Card(this.randomImgArray[counter].id, ImagesPaths.Back + this.randomImgArray[counter].imgName, 1);
//                 counter++;
//             }
//         }
//         // console.log(this.cardsMatrix)
//         return this.cardsMatrix;
//     }

//     //איתחול בחירות של מתשמש
//     public initSelection() {
//         for (let i = 0; i < this.selectionArray.length; i++) {
//             this.selectionArray[i] = 99;
//         }
//     }

//     //get front card image details
//     public getFrontImg(): string {
//         let imgObj: Image[] = this.images.filter(f => f.imgTypeId === 1);
//         return ImagesPaths.Front+imgObj[0].imgName;
//     }
//     public getHiddenImg(): string {
//         let imgObj: Image[] = this.images.filter(f => f.imgTypeId === 8);
//         return ImagesPaths.Hidden+imgObj[0].imgName;
//     }

//     public onClick(i: number, j: number) {
//         if (this.cardsMatrix[i][j].state != 2) {             
//             if (this.selectionArray[0] == 99 && this.selectionArray[1] == 99) { //להוציא לפונקציה נפרדת אחר כך
//                 this.selectionArray[0] = this.cardsMatrix[i][j].id;
//                 this.cardsMatrix[i][j].state = 2;
//                 this.stepsCounter++;
//                 // console.log("one");
                
//             } else if (this.selectionArray[0] != 99 && this.selectionArray[1] == 99) {
//                 this.selectionArray[1] = this.cardsMatrix[i][j].id;
//                 this.cardsMatrix[i][j].state = 2;
//                 this.stepsCounter++;
//                 // console.log("two");
//                 if (this.locigService.isEndOfGame(this.cardsMatrix)){
                    
//                     alert("End Of Game")
//                 }                
                
//             } else { //יכול להיות שמיותר וצריך להכניס לאיף הקודם
//                 if (this.selectionArray[0] != this.selectionArray[1]) { //להתחיל עם הבדיקה הזו - בכדי לבטל סימון.
//                     console.log("three");        
//                     for (let i = 0; i < 4; i++) { //להפוך לדינאמי
//                         this.cardsMatrix[i].filter(a => a.id == (this.selectionArray[0])).forEach(item => item.state = 1);
//                         this.cardsMatrix[i].filter(a => a.id == (this.selectionArray[1])).forEach(item => item.state = 1);
//                     }
//                 } else {
//                     console.log("stam test -");
//                     this.cardsMatrix[i].filter(a => a.id == (this.selectionArray[0])).forEach(item => item.state = 3);
//                     this.cardsMatrix[i].filter(a => a.id == (this.selectionArray[1])).forEach(item => item.state = 3);
//                 }
//                 this.initSelection();
//             }
//         }
//         this.stepsCounterEmitter.emit(this.stepsCounter);
//     }

//     // public isEndOfGame(): boolean {
//     //     for (let i = 0; i < this.cardsMatrix.length; i++) {
//     //         for (let j = 0; j < this.cardsMatrix[i].length; j++) {
//     //             if (this.cardsMatrix[i][j].state == 1) {
//     //                 return false;
//     //             }
//     //         }
//     //     }
//     //     return true;
//     // }

//     public getImage(i: number, j: number): string {
//         // this.cardsMatrix[2][2].state=2;
//         //צריך לקרוא לקומפוננטה שמציגה תמונה השליטה היא לא על איזה אימג' להציג כי אם האם להציג או לא
//         //הקומפוננטה של התמונה תחליט איזו תמונה להציג
//         if (this.cardsMatrix[i][j].state == 3) {
        
//             return "hidden";
//         } else if (this.cardsMatrix[i][j].state == 1) {
        
//             return this.getFrontImg();
//         } else {
            
//             return this.cardsMatrix[i][j].imageName;
//         }

//     }

//     //לחלק את הפונקציה לפונקציות מסודרות
//     public suffleImagesToMatrixArray() { //initiate and suffle imges to the matrix array
//         let tempImagesArr: Image[] = this.images.filter(f => f.imgTypeId === 2);
//         let randNumber: number;
//         let tempImgId: number;
//         let counterArray: number[] = new Array<number>(8);

//         for (let j = 0; j < counterArray.length; j++) {
//             counterArray[j] = 0;
//         }

//         console.log("counter array:" + counterArray);
//         for (let i = 0; i < this.randomImgArray.length; i++) {
//             do {

//                 randNumber = this.locigService.getRandom(0, 7);
//             } while (counterArray[randNumber] == 2);

//             this.randomImgArray[i] = tempImagesArr[randNumber];
//             counterArray[randNumber]++;

//         }
//         // console.log("rand array:")  //TODO - DELETE
//         // console.log(this.randomImgArray); //TODO - DELETE
//     }

//     // public getImgNumber(): number { //TODO - DELETE
//     //     let tempRand: number = this.locigService.getRandom(0, 7);
//     //     return 1;
//     // }

//     // public randomizeImages(imgId: number): boolean { //TODO - DELETE
//     //     let counter = 0;
//     //     for (let i = 0; i < this.randomImgArray.length; i++) {
//     //         if (this.randomImgArray[i].id == imgId && counter < 2) {
//     //             counter++;
//     //             return true;
//     //         }
//     //     }
//     //     return false;
//     // }

// }

