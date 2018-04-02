import { Component, OnInit } from '@angular/core';
import { slidenx, slidex } from '../animation';

@Component({
  selector: 'app-fp-location-map',
  templateUrl: './fp-location-map.component.html',
  styleUrls: ['./fp-location-map.component.css'],
  animations:[
    slidenx,
    slidex
  ]
})
export class FpLocationMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
