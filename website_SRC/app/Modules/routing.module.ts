import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { Error404pageComponent } from '../components/Accessories/error404page/error404page.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { FeedbacksComponent } from '../components//Feedback/feedbacks/feedbacks.component';
import { GamepageComponent } from '../components/Game/gamepage/gamepage.component';
import { RegisterComponent } from '../components/LoginAndRegistration/register/register.component';
import { ResultsComponent } from '../components/Results/results/results.component';





const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "feedbacks", component:FeedbacksComponent },
    { path: "memorygame", component:GamepageComponent },
    { path: "contactus", component: ContactusComponent },
    { path: "results", component:ResultsComponent },
    
    {path:"Register",component:RegisterComponent},//TODO    
    //will redirect to home
    { path: "", redirectTo: "/home", pathMatch: "full" },
    //error page
    { path: "**", component: Error404pageComponent },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class routingModule { }
function newFunction(): string {
    return "registration";
}


