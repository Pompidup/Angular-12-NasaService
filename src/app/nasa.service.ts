import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private myService: HttpClient) { }


  public getImageOfTheDay(): Observable<string> {
    return this.myService.get("https://api.nasa.gov/planetary/apod?date=2019-05-05&api_key=YSl8uqsyvPdL28bMF1lStJKwrEp0iM2leaMHyX6X").pipe(
      map(
        (param: any) => {
          let apod: string = '';
          apod = param.url
          return apod;
        }
      )
    )

  }
}
