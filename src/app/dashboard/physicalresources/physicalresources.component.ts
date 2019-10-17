import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physicalresources',
  templateUrl: './physicalresources.component.html',
  styleUrls: ['./physicalresources.component.scss']
})
export class PhysicalresourcesComponent implements OnInit {
  pickup:any = 'delivery';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['dashboard/document']);
  }

}
