import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardImage } from '../Models/CardImage';
import { Image } from '../Models/Image';

@Injectable({
    providedIn: 'root'
})
export class ImagesService {

   
    constructor( private httpClient: HttpClient) { }
    
    public getImages() {
        return this.httpClient.get<Image[]>("http://localhost:49440/images");
    }
}
