import { Injectable } from '@angular/core';
import { Card } from '../Models/Card';
import { Image } from '../Models/Image';

@Injectable({
    providedIn: 'root'
})
export class LogicService {

    private countNums: number[] = new Array<number>(8);
    public selectionArray: number[] = new Array<number>(2);//Array that handel the selections    
    constructor() { }

    //-----Array initialasation logics----
    public suffleImagesToMatrixArray(imagesArr: Image[]): Image[] { //initiate and suffle imges to the matrix array
        let tempImagesArr: Image[] = imagesArr.filter(f => f.imgTypeId === 2); //get only the cards images
        let randNumber: number;
        let counterArray: number[] = new Array<number>(8);
        let tempShuffledArray: Image[] = new Array<Image>(16);

        for (let j = 0; j < counterArray.length; j++) {
            counterArray[j] = 0;
        }

        
        for (let i = 0; i < tempShuffledArray.length; i++) {
            do {

                randNumber = this.getRandom(0, 7);
            } while (counterArray[randNumber] == 2);

            tempShuffledArray[i] = tempImagesArr[randNumber];
            counterArray[randNumber]++;
        }
        return tempShuffledArray;

    }

    public initSelection() {
        for (let i = 0; i < this.selectionArray.length; i++) {
            this.selectionArray[i] = 99;
        }
    }

    //------GAME LOGIC----
    public isEndOfGame(board: Card[][]): boolean {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j].state == 1) {
                    return false;
                }
            }
        }
        return true;
    }

    public getNumber(): number {
        let tempNum: number;
        do {
            tempNum = this.getRandom(0, 7);
        } while (this.countNums[tempNum] == 2);//while the counter in "countNums" array =2 =  will continue to search diferent number 
        this.countNums[tempNum]++;
        return tempNum;
    }

    checkIfCanInsertToArray(n: number): boolean {
        if (this.countNums[n] < 2) {
            return true;
        }
        return false;
    }

    public getRandom(min: number, max: number): number {
        return min + Math.floor(Math.random() * (max + 1));
    }
}
