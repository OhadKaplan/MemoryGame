import { Injectable } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from 'src/app/Models/Image';
import { LogicService } from '../logic.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImagesLogicService {


    

    constructor(private imageService: ImagesService, private logicService: LogicService) { }

    public async setImagesFromServer(arr:Image[]) {
        let images: Image[] = new Array<Image>();
         
        return new Promise<void>(resolve => {
        
        let observable = this.imageService.getImages().subscribe
            (imgs => {
                images = imgs;
                arr = this.initCardsImagesArray(images);//insert images to flat cardsimages array                
            });    
        });
            
        
    }

    // public async printImageArray(elements: Image[]) {
    //     return new Promise<void>(resolve => {
    //         this.setImagesFromServer(elements);
    //     });
    // }
    // public getCardsImagesForMatrix():Observable<Image[]>{
    //  this.setImagesFromServer();
     
    // }

    //Initilize Array with images and return shuffeld double array wtih images
    private initCardsImagesArray(imagesArr: Image[]):Image[] {
        let randomImgArray: Image[] = new Array<Image>(16);//TODO delete
        let randNumber: number;// use to get random number
        let counterArray: number[] = new Array<number>(8); //use to count num of time the function used an image for the array


        imagesArr = imagesArr.filter(f => f.imgTypeId === 2);//Filter only the card images
        this.initCounterArray(counterArray);//service Array To Count the 2 usage of every image

        for (let i = 0; i < randomImgArray.length; i++) {
            do {
                randNumber = this.logicService.getRandom(0, 7);
            } while (counterArray[randNumber] == 2);

            randomImgArray[i] = imagesArr[randNumber];
            counterArray[randNumber]++;
        }
        return randomImgArray;
    }

    //Initilize  the service Array To Count the 2 usage of every image
    private initCounterArray(arr: Number[]) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
    }
}
