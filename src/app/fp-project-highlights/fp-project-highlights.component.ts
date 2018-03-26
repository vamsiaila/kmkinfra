import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-project-highlights',
  templateUrl: './fp-project-highlights.component.html',
  styleUrls: ['./fp-project-highlights.component.css']
})
export class FpProjectHighlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facility = [
    {"icon":"../../assets/images/c1.png","name":"30ft & 40ft Wide Black Top Roads"},
    {"icon":"../../assets/images/c2.png","name":"Landscaping"},
    {"icon":"../../assets/images/c3.png","name":"Clear Title With High Returns"},
    {"icon":"../../assets/images/c4.png","name":"European Street Lighting"},
    {"icon":"../../assets/images/c5.png","name":"Rainwater Harvesting Pits"},
    {"icon":"../../assets/images/c6.png","name":"Avenue Plantation"},
    {"icon":"../../assets/images/c7.png","name":"Pollution Free Area"},
    {"icon":"../../assets/images/c8.png","name":"Project Planne According to Vastu"},
    {"icon":"../../assets/images/c9.png","name":"Excellent Connectivity"},
    {"icon":"../../assets/images/c10.png","name":"3 Parks (Over 2 Acres Area)"},
    {"icon":"../../assets/images/c11.png","name":"Gated Community"},
    {"icon":"../../assets/images/c12.png","name":"24 Hours Security"},
    {"icon":"../../assets/images/c13.png","name":"Water Supply"},
    {"icon":"../../assets/images/c14.png","name":"Over Head Water Tank"}
  ];

}
