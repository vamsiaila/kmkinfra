import { Component, OnInit } from '@angular/core';
import { slidenx, slidex, slidey } from '../animation';

@Component({
  selector: 'app-fp-floor-plans',
  templateUrl: './fp-floor-plans.component.html',
  styleUrls: ['./fp-floor-plans.component.css'],
  animations: [
    slidenx,
    slidex,
    slidey
  ]
})
export class FpFloorPlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  area = [
    {"name":"GROUND FLOOR","area":"1019 SQ FT"},
    {"name":"PORTICO AREA","area":"212 SQ FT"},
    {"name":"FIRST FLOOR","area":"1232 SQ FT"},
    {"name":"TOTAL BUILT-UP AREA","area":"2463 SQ FT"},
    {"name":"HEAD ROOM AREA","area":"163 SQ FT"}
  ]

}
