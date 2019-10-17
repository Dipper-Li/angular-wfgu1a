import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
export interface DialogData {
  product
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Input() showBtn:boolean = true;
  constructor(public dialog: MatDialog) { }
  @Output() addToCart = new EventEmitter();
  ngOnInit() {
  }
  add(){
    if(this.product.type=='vas'){
      this.addToCart.emit(this.product);
    }else{
      this.openDialog();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddToCartComponent, {
      width: '830px',
      data: {
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("product:",result);
      if(result){
        this.addToCart.emit(result);
      }  
    });
  }

}

