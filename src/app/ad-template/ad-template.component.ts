import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-template',
  templateUrl: './ad-template.component.html',
  styleUrls: ['./ad-template.component.css']
})
export class AdTemplateComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}