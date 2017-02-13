import {Component, OnInit, OnChanges} from '@angular/core';
import {QuotesService} from "../quotes.service";
import {QuoteData} from "./data.model";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public data: QuoteData;

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.getQuotes()
  }

  getQuotes() {
    this.quotesService.getQuote()
      .subscribe((response: QuoteData) => {
          this.data = response;
        },
        (error) => console.log(error))
  }
}
