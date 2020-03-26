import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.css']
})
export class MovieMainComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  searchResults = [];
  myMovieList =  [];
  title = 'WatchDog';
  ngOnInit(): void {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
  }
}
