import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  //basicInfo:any;
  basicInfo = this.fb.group({
    orderNo: [{value:'',disabled:true}],
    orderNature: [{value:'',disabled:true}],
    usage: [''],
    documentType: [''],
    documentNum: [''],
    customerName: [{value:'',disabled:true}],
    prefix: [''],
    num: [''],
    contactFixedLineNum: [''],
    contactEmailAddress: [''],
    clubMembershipId: [''],
    staffNum: [{value:'',disabled:true}],
    staffName: [{value:'',disabled:true}],
    contactNum: [''],
    referrer: [''],
    referrerName: [{value:'',disabled:true}],
    arr: [['']]
  });
  // {
  //   orderInformation:{
  //     orderNo:'54585454353',
  //     orderNature:'New'
  //   },
  //   customerInformation:{
  //     usage:'individual',
  //     documentType:'',
  //     documentNum:'',
  //     customerName:'',
  //     contactMobileNum:{
  //       prefix:'852',
  //       num:'93443231'
  //     },
  //     contactFixedLineNum:'24343424',
  //     contactEmailAddress: '',
  //     clubMembershipId:'6546546352',
  //   },
  //   salesInformation:{
  //     staffNum:'T00423444',
  //     staffName:'GIGI LEE',
  //     contactNum:'28843321',
  //     referrer:'',
  //     referrerName:'',
  //   }
  // }
  constructor(private http: HttpClient,private fb: FormBuilder, private router: Router, private shoppingCartService: ShoppingCartService,private _snackBar: MatSnackBar) {
    //this.basicInfo = this.shoppingCartService.getBasicInfo();
    console.log('this.basicInfo:',this.basicInfo);
    this.basicInfo.patchValue(this.shoppingCartService.getBasicInfo());
    // this.http.get('http://localhost:8080/getHerosa',{observe:'response'}).pipe(
    //   catchError(this.t)
    // ).subscribe((data)=>{
    // console.log('data:',data);
    // },error=>{
    //   console.error('error:',error);
    // });
  }
  openSnackBar() {
    this._snackBar.open('test','', {
      duration: 1500,
    });
  }
  t(error: HttpErrorResponse){console.log('error2:',error);return throwError(
    'Something bad happened; please try again later.');}
  ngOnInit() {
  }

  next() {
    console.log('this.basicInfo:',this.basicInfo);
    this.shoppingCartService.saveBasicInfo(this.basicInfo.value);
    this.router.navigate(['dashboard','offerselection']);
  }
}
