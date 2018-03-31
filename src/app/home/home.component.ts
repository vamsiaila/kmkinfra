import { Component, OnInit } from '@angular/core';
import { Fade, slidex, slidenx } from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    Fade,
    slidex,
    slidenx
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
