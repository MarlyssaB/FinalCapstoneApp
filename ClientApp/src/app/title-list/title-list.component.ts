import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  constructor() { }
  @Input() movies;
  @Input() title;

  ngOnInit() {
  }

}
