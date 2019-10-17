import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,  FormControl } from '@angular/forms';
import { CustValidatorFn } from '../customer-validator'
@Component({
  selector: 'app-add-hero-reactive',
  templateUrl: './add-hero-reactive.component.html',
  styleUrls: ['./add-hero-reactive.component.css']
})
export class AddHeroReactiveComponent implements OnInit {
  powers = ['Fly','Time','Intelligent'];
  hero = this.fb.group({
    name:[null,[Validators.required,Validators.maxLength(2),CustValidatorFn.forbiddenNameValidator(/test/i)]],
    power:[null,Validators.required],
  },);
  a = 12;
  // hero = new FormGroup({
  //   name:new FormControl(''),
  //   power:new FormControl(''),
  // });
    // hero = this.fb.group({
    //   name:this.fb.control([''],[CustValidatorFn.forbiddenNameValidator(/Jim/i)]),
    //   power:['',CustValidatorFn.forbiddenNameValidator(/Fly/i)],
    // },);
  // name:this.fb.control([], Validators.maxLength(2)),
  //   power:this.fb.control([]),
  //   alias:this.fb.array([this.fb.control([], Validators.maxLength(2))])
  constructor(private fb:FormBuilder) { 
    this.hero.patchValue({name:'Jim',power:'Fly'})
  }

  ngOnInit() {
  }
  
  get name(){return this.hero.get('name');}
  get power(){return this.hero.get('power');}

}
