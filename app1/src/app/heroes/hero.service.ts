import { Injectable } from '@angular/core';
// for HttpClient work , need to import HttpClientModule in modules Angula4
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IHero } from './hero';

@Injectable()
export class HeroService {
// To access api update .angular-cli.json 
private _heroUrl ='./api/heros.json';

  constructor( private _http: HttpClient) { }

  getHeroes(): Observable<IHero[]> {
    return this._http.get<IHero[]>(this._heroUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}
getHero(id: number | string) {
  return this.getHeroes()
    // (+) before `id` turns the string into a number
    .map(heroes => heroes.find(hero => hero.id === +id));
}

private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
  } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return Observable.throw(errorMessage);
}
}
