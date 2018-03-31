import { Component, OnInit } from '@angular/core';
import { slidenx, slidex } from '../animation';

@Component({
  selector: 'app-fp-overview',
  templateUrl: './fp-overview.component.html',
  styleUrls: ['./fp-overview.component.css'],
  animations: [
    slidenx,
    slidex
  ]
})
export class FpOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
