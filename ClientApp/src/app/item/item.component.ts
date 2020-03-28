import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()  movie ;
  theStyles;
  name;
  constructor() { }

  ngOnInit() {
    const backDrop = 'http://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
    this.theStyles = {width: '200px', backgroundImage: 'url(' + backDrop + ')'};

    if (!this.movie.name) {
      this.name = this.movie.original_title;
    } else {
      this.name = this.movie.name;
    }
  }

}
