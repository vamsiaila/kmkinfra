import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
cp = [
  {"logo_path":"../../assets/images/cp-logo1.png","img_path":"../../assets/images/cp-tile1.png", "title":"Khinoor Residency, Toli Chowki, Paramount Hills"},
  {"logo_path":"../../assets/images/cp-logo2.png","img_path":"../../assets/images/cp-tile2.png", "title":"Pariwar Town-Gated Community Chandrayangutta"},
  {"logo_path":"","img_path":"","title":"Khriza Phase I @ Alkapur"},
  {"logo_path":"","img_path":"","title":"Kohinoor Mississippi Township"},
  {"logo_path":"","img_path":"","title":"Khriza Phase Ii @ Alkapur"},
  {"logo_path":"","img_path":"","title":"Pariwar Town Gated Community"},
  {"logo_path":"","img_path":"","title":"Khaswa Enclave"}
  ];

}
