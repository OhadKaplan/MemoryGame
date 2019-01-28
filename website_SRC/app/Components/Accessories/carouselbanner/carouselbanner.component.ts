import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { ImagesPaths } from 'src/app/Models/ImagesPaths';

@Component({
    selector: 'app-carouselbanner',
    templateUrl: './carouselbanner.component.html',
    styleUrls: ['./carouselbanner.component.css']
})
export class CarouselbannerComponent implements OnInit {

    private bannerImages: Image[] = new Array<Image>();

    public banners: string[] = new Array<string>();

    constructor(private imagesService: ImagesService) { }

    ngOnInit() {
        
        let observable = this.imagesService.getImages().subscribe
            (bans => {
                this.bannerImages = bans.filter(f => f.imgTypeId === 4);
                this.setBannerFullPath();                    
            });
        
    }

    public setBannerFullPath() {
        for (let i = 0; i < this.bannerImages.length; i++) {
            this.banners[i] =ImagesPaths.Banner+this.bannerImages[i].imgName;
        }
    }


}
