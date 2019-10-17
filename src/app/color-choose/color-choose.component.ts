import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-choose',
  templateUrl: './color-choose.component.html',
  styleUrls: ['./color-choose.component.css']
})
export class ColorChooseComponent implements OnInit {
  color;
  constructor() { 
    let a = null;
    let b = undefined;
    let c = 'aa';
    console.log((a&&c)||b);
  }

  ngOnInit() {
  }





}