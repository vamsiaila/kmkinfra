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
  {"logo_path":"../../assets/images/cp-logo1.png","img_path":"../../assets/images/cp-img1.png", "title":"Khinoor Residency, Toli Chowki, Paramount Hills"},
  {"logo_path":"../../assets/images/cp-logo2.png","img_path":"../../assets/images/cp-img2.png", "title":"Pariwar Town-Gated Community Chandrayangutta"},
  {"logo_path":"","img_path":"","title":"Khriza Phase I @ Alkapur"},
  {"logo_path":"","img_path":"","title":"Kohinoor Mississippi Township"},
  {"logo_path":"","img_path":"","title":"Khriza Phase Ii @ Alkapur"},
  {"logo_path":"","img_path":"","title":"Pariwar Town Gated Community"},
  {"logo_path":"","img_path":"","title":"Khaswa Enclave"}
  ];
  up = [
    {"logo_path":"","img_path":"../../assets/images/up-img1.png", "title":"Kohinoor Pearl"},
    {"logo_path":"","img_path":"../../assets/images/up-img2.png", "title":"Kohinoor Meadows"},
    {"logo_path":"","img_path":"../../assets/images/up-img3.png", "title":"Kohinoor Meadows"}
    ];
    op = [
      {"logo_path":"","img_path":"../../assets/images/op-img1.png", "title":""},
      {"logo_path":"","img_path":"../../assets/images/op-img2.png", "title":""},
      {"logo_path":"","img_path":"../../assets/images/op-img3.png", "title":""},
      {"logo_path":"","img_path":"../../assets/images/op-img4.png", "title":""}
      ];
    
    
  
}

