import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Models/Image';
import { ImagesService } from 'src/app/services/images.service';
import { ImagesPaths } from 'src/app/Models/ImagesPaths';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

    public logoFullPath: string;
    private images: Image[] = new Array<Image>();

    constructor(private imagesServie:ImagesService) { }

    ngOnInit() {
        let observable = this.imagesServie.getImages().subscribe
        (logo=>{
            this.images = logo.filter(f=>f.imgTypeId===6);
            this.logoFullPath = ImagesPaths.LOGO+ this.images[0].imgName;
        });
    }

}
