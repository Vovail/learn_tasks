import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class QuotesService {

  private quotesUrl: string = "http://quotes.stormconsultancy.co.uk/random.json";

  constructor(private http: Http) {
  }

  getQuote(): Observable<any> {

    return this.http
      .get(this.quotesUrl)
      .map((response: Response) => {
        return response.json()
      })
      .catch((error: any): Observable<any> => {
        return Observable.throw(error)
      })
  }

}
