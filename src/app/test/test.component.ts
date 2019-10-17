import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tv = 'test';
  c(v){
    console.log('v:',v);
    console.log('tv:',this.tv);
  }
  constructor() { }

  ngOnInit() {
  }

}
