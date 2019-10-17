import { Component, OnInit } from '@angular/core';
import {TestService} from '../service/test.service'
@Component({
  selector: 'app-partb',
  templateUrl: './partb.component.html',
  styleUrls: ['./partb.component.css'],
  //providers:[TestService]
})
export class PartbComponent implements OnInit {

  constructor(private test:TestService) { }

  ngOnInit() {
  }

}