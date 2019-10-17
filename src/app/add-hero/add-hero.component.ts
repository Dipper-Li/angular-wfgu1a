import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  powers = ['Fly','Time','Intelligent'];
  hero = new Hero('Jim','Time');
  constructor() { }

  ngOnInit() {
  }

}