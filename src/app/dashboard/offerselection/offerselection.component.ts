import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-offerselection',
  templateUrl: './offerselection.component.html',
  styleUrls: ['./offerselection.component.css']
})
export class OfferselectionComponent implements OnInit {
  criteria = [];
  basicFilter:any;
  product:any;
  groupProduct:any;
  isvas:any;
  id:any;
  categories:any;
  test;
  constructor(private router: Router, private shoppingCartService:ShoppingCartService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { 
    this.product = {
      type:"offer",
      price:120,
      mup:false
    }
    this.categories = [
      {
        head: { key: 'plan', value: 'plan', label: 'Plan' },
        items: [
          { key: 'simonly', value: 'simonly', label: 'SIM only' },
          { key: 'simstandalone', value: 'simstandalone', label: 'SIM + Standalone' },
          { key: 'simcoupon', value: 'simcoupon', label: 'SIM + Coupon' },
          { key: 'simhandset', value: 'simhandset', label: 'SIM + Handset' },
        ],
        parentKey: null,
        isShow: true
      },
      {
        head: { key: 'brand', value: 'brand', label: 'Brand' },
        items: [
          { key: 'csl', value: 'csl', label: 'CSL' },
          { key: '1O1O', value: '1O1O', label: '1O1O' },
        ],
        parentKey: null,
        isShow: true
      },
      {
        head: { key: 'mup', value: 'mup', label: 'MUP' },
        items: [
          { key: 'yes', value: 'Y', label: 'Yes' },
          { key: 'no', value: 'N', label: 'No' },
        ],
        parentKey: null,
        isShow: true
      },
      {
        head: { key: 'devicebrand', value: 'devicebrand', label: 'Device Brand' },
        items: [
          { key: 'Dyson', value: 'Dyson', label: 'Dyson' },
          { key: 'Philips', value: 'Philips', label: 'Philips' },
        ],
        parentKey: 'brand',
        isShow: false
      },
    ];
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.isvas = params.isvas;
      this.id = params.id;
      if(this.isvas=='Y'){
        this.product = {
          type:"vas",
          price:50,
        }
      }else{
        this.product = {
          type:"offer",
          price:120,
          mup:false
        }
      }
      
    });
  }
  addFilter(e){
    console.log(e);
    console.log(e.Plan);
  }
  addToCart(e){
    console.log("offer:",e);
    if(e.type=='offer'){
      this.shoppingCartService.addToCart(e);
    }else if(e.type=='vas'){
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
    if(this.isvas!='Y'){
      criteria.map((c)=>{
        if(c.head.key=='mup'&&c.item.value=='Y'){
          this.product =  {
            type:"offer",
            price:120,
            mup:true
          }
        }else{
          this.product = {
            type:"offer",
            price:120,
            mup:false
          }
        }
        return c
      });
    }
  }
  close(){
    this.router.navigate(['dashboard/offerselection']);
  }
  // addVas(e){
  //   console.log('vas:',e);
    
  // }
}
