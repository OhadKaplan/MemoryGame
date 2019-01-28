import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { MainComponent } from '../components/main/main.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { FeedbacksComponent } from '../components/Feedback/feedbacks/feedbacks.component';
import { NewfeedbackComponent } from '../components/Feedback/newfeedback/newfeedback.component';
import { NewfeedbackComponent as NewFeedbackConteiner} from '../Containers/Feedback/newfeedback/newfeedback.component';
import { FeedbackslistComponent } from '../components/Feedback/feedbackslist/feedbackslist.component';
import { GamepageComponent } from '../components/Game/gamepage/gamepage.component';
import { Error404pageComponent } from '../components/Accessories/error404page/error404page.component';
import { routingModule } from './routing.module';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { RegisterComponent } from '../components/LoginAndRegistration/register/register.component';
import { MenuComponent } from '../components/Accessories/menu/menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule,MatButtonModule,MatCheckboxModule,MatInputModule} from "@angular/material";
import { TopfeedbacksComponent } from '../Components/Feedback/topfeedbacks/topfeedbacks.component';
import { ResultsComponent } from '../components/Results/results/results.component';
import { TopresultsComponent } from '../components/Results/topresults/topresults.component';
import { LoginComponent } from '../components/LoginAndRegistration/login/login.component';
import { LogoComponent } from '../components/Accessories/logo/logo.component';
import { BoardComponent } from '../components/Game/board/board.component';
import { UserInfoComponent } from '../components/LoginAndRegistration/user-info/user-info.component';
import { LoginbarComponent } from '../components/LoginAndRegistration/loginbar/loginbar.component';
import { CarouselbannerComponent } from '../components/Accessories/carouselbanner/carouselbanner.component';
import { MenubarComponent } from '../components/Accessories/menubar/menubar.component';
import { GamestatusComponent } from '../components/game/gamestatus/gamestatus.component';
import { FeedbackpopupComponent } from '../components/feedback/feedbackpopup/feedbackpopup.component';
import { FooterComponent } from '../components/accessories/footer/footer.component';




@NgModule({
    declarations: [
        LayoutComponent,
        MainComponent,
        HomeComponent,
        AboutComponent,
        FeedbacksComponent,
        NewfeedbackComponent,
        FeedbackslistComponent,
        GamepageComponent,
        Error404pageComponent,
        ContactusComponent,
        RegisterComponent,
        MenuComponent,        
        TopfeedbacksComponent,
        ResultsComponent,
        TopresultsComponent,
        LoginComponent,
        LogoComponent,
        BoardComponent,
        UserInfoComponent,
        LoginbarComponent,
        CarouselbannerComponent,
        MenubarComponent,
        GamestatusComponent,
        FeedbackpopupComponent,
        NewFeedbackConteiner,
        FooterComponent
        
        
    ],
    imports: [
        BrowserModule,
        routingModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
