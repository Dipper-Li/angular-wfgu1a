import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as picture from '../../service/pic';
import { categories as cate } from '../../service/data';
import { recom as rc, otherRecom, clrecom } from '../../service/data';
import { AppCommon } from '../../app.common';
@Component({
  selector: 'app-offerselection',
  templateUrl: './offerselection.component.html',
  styleUrls: ['./offerselection.component.css']
})
export class OfferselectionComponent implements OnInit {
  pic = picture;
  criteria = [];
  basicFilter:any;
  groupProduct:any;
  isvas:any;
  id:any;
  categories:any;
  recom:any;
  otrecom:any;
  clubrecom:any;
  constructor(private router: Router, private shoppingCartService:ShoppingCartService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private appCommon: AppCommon) { 
    window.scroll(0,0);
  }
  ngOnInit() {
    this.categories = this.appCommon.copy(cate);
    this.recom = this.appCommon.copy(rc);
    this.otrecom = this.appCommon.copy(otherRecom);
    this.clubrecom = this.appCommon.copy(clrecom);
    this.route.params.subscribe(params => {
      this.isvas = params.isvas;
      this.id = params.id;
    });
  }
  addFilter(e){
    console.log(e);
    console.log(e.Plan);
  }
  addToCart(e){
    console.log("offer:",e);
    if(e.detail.type=='offer'){
      this.shoppingCartService.addToCart(e);
    }else if(e.detail.type=='vas'){
      this.shoppingCartService.addVas(e,this.id);
    }
    this.openSnackBar('Add successfully');
  }
  openSnackBar(message: string,) {
    this._snackBar.open(message, '', {
      duration: 1500,
    });
  }
  search(criteria){
    console.log(criteria);
    this.recom = this.appCommon.copy(rc);
    if(this.isvas!='Y'){
      criteria.map((c)=>{
        if(c.head.key=='ismup'){
          this.recom = this.recom.map(r=>{
            r.isMup = c.item.value;
            return r;
          })
        }
        return c
      });
    }
  }
  close(){
    this.router.navigate(['dashboard/offerselection']);
  }
}
