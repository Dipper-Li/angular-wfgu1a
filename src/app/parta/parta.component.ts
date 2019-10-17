import { Component, OnInit } from '@angular/core';
import { TestService } from  '../service/test.service'
@Component({
  selector: 'app-parta',
  templateUrl: './parta.component.html',
  styleUrls: ['./parta.component.css'],
  //providers:[TestService]
})
export class PartaComponent implements OnInit {

  constructor(private test:TestService) { }

  ngOnInit() {
  }

}