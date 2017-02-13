import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs";
import {baseUrl} from "../constants/constants";

@Injectable()
export class CommonService {

  private baseUrl:string = baseUrl;

  constructor(private http: Http) {
  }

  successResponse = (data: Response)=> data.json();
  handleError = (error: any): Observable<any> => Observable.throw(error);

  getData(url: string): Observable<any> {
    return this.http.get(baseUrl+url)
      .map(this.successResponse)
      .catch(this.handleError)
  }

}
