import { Injectable } from '@angular/core';
import { Card } from '../Models/Card';
import { Image } from '../Models/Image';

@Injectable({
    providedIn: 'root'
})
export class BoardlogicService {

    private cardsMatrix: Array<Card[]> = new Array<Card[]>(4);
    private images: Image[] = new Array<Image>();

    constructor() { }


}
