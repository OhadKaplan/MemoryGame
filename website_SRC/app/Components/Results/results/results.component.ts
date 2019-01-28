import { Component, OnInit,Input } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { Result } from '../../../Models/result';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    
    private results:Result[];
    @Input()
    public hideTitle:boolean;

    constructor(private resultsService:ResultsService) { };
  
    
  
    ngOnInit() {

      let observable = this.resultsService.getAllResults().subscribe(r => {
          this.results = r;
      });
    }
}
