import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {MatDialogRef} from '@angular/material';
export interface DialogData {
  product:any
}
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit{
  contractPeriodList = [{label: '24Months', value: '24'},{label: '12Months', value: '12'}];
  internalStorageList = [{label: '256GB', value: '256'},{label: '128GB', value: '128'}];
  colorList = [{label: 'white', value: 'white'},{label: 'black', value: 'black'}];
  contractPeriod = this.contractPeriodList[0].value;
  internalStorage = this.internalStorageList[0].value;
  color = this.colorList[0].value;
  product;
  constructor(
    public dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(data.product);
      this.product = data.product;
      console.log('add:',this.product);
      
    //   this.cars = [
    //     {label: 'Audi', value: 'Audi'},
    //     {label: 'BMW', value: 'BMW'},
    //     {label: 'Fiat', value: 'Fiat'},
    //     {label: 'Ford', value: 'Ford'},
    //     {label: 'Honda', value: 'Honda'},
    //     {label: 'Jaguar', value: 'Jaguar'},
    //     {label: 'Mercedes', value: 'Mercedes'},
    //     {label: 'Renault', value: 'Renault'},
    //     {label: 'VW', value: 'VW'},
    //     {label: 'Volvo', value: 'Volvo'},
    // ];
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  updateProduct(){
    this.product.contractPeriod = this.contractPeriod;
    this.product.internalStorage = this.internalStorage;
    this.product.color = this.color;
  }

}
