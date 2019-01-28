import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    public hamburgerMenu:boolean;
  constructor() { }

  ngOnInit() {
      this.hamburgerMenu=false;
  }

  public clickOnHamburger(){
    if(!this.hamburgerMenu){
        this.hamburgerMenu=true;
        
    }else{
        this.hamburgerMenu=false;
    }
  }

}
