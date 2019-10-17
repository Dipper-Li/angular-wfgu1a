import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})
export class AliasComponent implements OnInit {
  name;
  alias = this.fb.array([

  ]
  );
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  addAlias(al){
    console.log(al);
    this.alias.push(this.fb.control({name:al,id:1}));
  }

}