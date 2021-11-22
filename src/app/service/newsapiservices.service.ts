import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //tangkap api dari url newsapi
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20c64f42cd1c4feaa12f19194db070e9";


  //untuk masukan object ke top heading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
