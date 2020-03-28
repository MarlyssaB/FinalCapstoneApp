import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {
  @Input() movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  saveMovieToList() {
    this.movieService.saveToList(this.movie);
  }

}
