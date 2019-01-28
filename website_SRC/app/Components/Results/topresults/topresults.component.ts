import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { Result } from '../../../Models/result';

@Component({
  selector: 'app-topresults',
  templateUrl: './topresults.component.html',
  styleUrls: ['./topresults.component.css']
})
export class TopresultsComponent implements OnInit {
    private results:Result[];

    constructor(private resultsService:ResultsService) { };
  
    
  
    ngOnInit() {
      let observable = this.resultsService.getTopResults().subscribe(r => {
          this.results = r;
          
      });
    }
}
