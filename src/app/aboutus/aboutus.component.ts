import { Component, OnInit } from '@angular/core';
import { slidenx, slidex } from '../animation';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations:[
    slidenx,
    slidex
  ]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  team = [
    {"name":"Mohammed Ahmed Quadri","designation":"Chairman","img_path":"../../assets/images/team-001.png"},
    {"name":"Mohammed Amjad Quadri","designation":"Managing Director","img_path":"../../assets/images/team-002.png"},
    {"name":"Syed Mohammed Rizwan","designation":"C.E.O","img_path":"../../assets/images/team-003.png"},
    {"name":"M. Anil Kumar Reddy","designation":"Director - Sales & Marketing","img_path":"../../assets/images/team-004.png"},
    {"name":"Syed Mohammed Rizwan","designation":"C.E.O","img_path":"../../assets/images/team-003.png"},
    {"name":"M. Anil Kumar Reddy","designation":"Director - Sales & Marketing","img_path":"../../assets/images/team-001.png"}
  ];

}
