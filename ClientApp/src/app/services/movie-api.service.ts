import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient: HttpClient) { }
  url = 'https://api.themoviedb.org/3/';
  apiKey = '&api_key=75a4f913ef5be22ca9879fa5a2f17e9a';

  async get(path, options?): Promise<any> {
    return await this.httpClient.get(this.url + path + this.apiKey, options).toPromise();
  }
}
