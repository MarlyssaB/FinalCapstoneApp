import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies: Movie[];
  public newEntry: Movie = {id: 0, title: '', genre: '', stars: 0, review: ''};


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
    this.movies = await this.http.get<Movie[]>(this.baseUrl + 'movie').toPromise();
  }

  async save() {
    await this.http.post<Movie[]>(this.baseUrl + 'movie', this.newEntry).toPromise();
    this.newEntry = {id: 0, title: '', genre: '', stars: 0, review: ''};
    this.movies = await this.http.get<Movie[]>(this.baseUrl + 'movie').toPromise();

  }
}
interface Movie {
  id: number;
  title: string;
  genre: string;
  stars: number;
  review: string;
}

