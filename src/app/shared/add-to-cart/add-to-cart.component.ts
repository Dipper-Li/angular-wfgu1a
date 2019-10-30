import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AppCommon } from '../../app.common';
import * as picture from '../../service/pic';
export interface DialogData {
  product:any
}
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit{
  pic= picture;
  contractPeriodList = [{label: '24Months', value: 24},{label: '12Months', value: 12}];
  internalStorageList = [{label: '256GB', value: '256'},{label: '128GB', value: '128'}];
  colorList = [{label: 'White', value: 'White'},{label: 'Black', value: 'Black'},{label: 'Silver', value: 'Silver'},{label: 'Gold', value: 'Gold'}];
  contractPeriod = 24;
  internalStorage = this.internalStorageList[0].value;
  color = this.colorList[0].value;
  localData = 10;
  dateStart = new Date();
  dateEnd = new Date();
  product;
  constructor(
    public dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appCommon: AppCommon) { 
      this.dateStart.setHours(20,0,0,0);
      this.dateEnd.setHours(21,0,0,0);
      this.product = appCommon.copy(data.product);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.setPrice(this.contractPeriod);
  }
  setPrice(period){
    this.product.plan.period = period;  
    if(this.product.info.dependOnPeriod){
      this.product.plan.price = 198;
      if(period==12){
        this.product.info.price = 1188;
      }else if(period==24){
        this.product.info.price = 0;
      }
    }
    console.log('contractPeriod:',this.contractPeriod);
  }
  updateProduct(){
    let config = {
      contractPeriod:this.contractPeriod,
      internalStorage: this.internalStorage,
      color: this.color,
      //localData: this.localData,
      dateStart:this.dateStart,
      dateEnd:this.dateEnd
    };
    this.product.plan.localData = this.localData;
    this.product.config = config;
    console.log('this.product:',this.product);
  }

}
