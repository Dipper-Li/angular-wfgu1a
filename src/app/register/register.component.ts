import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerInfo = new FormGroup({
  //   name:new FormControl(''),
  //   password:new FormControl(''),
  // });
  registerInfo = this.fb.group({
    name:[''],
    password:['']
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.registerInfo.value);
  }

}