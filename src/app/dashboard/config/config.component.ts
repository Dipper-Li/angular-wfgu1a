import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { NumberSelectorComponent } from 'src/app/shared/number-selector/number-selector.component';
import { AppCommon } from 'src/app/app.common';
import { MembersNumComponent } from 'src/app/shared/members-num/members-num.component';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  cars: any;
  today: Date = new Date();
  numType = 'nmn';
  serviceInstance: any = {id:null};
  su: any;
  sid: any;
  configType: any;
  gsId:any;
  constructor(private router: Router, private route: ActivatedRoute, private shoppingCartService: ShoppingCartService, public dialog: MatDialog, private appCommon: AppCommon) {
    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' },
    ];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sid = params.sid;
      this.configType = params.configType;
      this.su = this.appCommon.copy(this.shoppingCartService.findById(this.sid));
      this.gsId = params.gsId;
      if (this.su.product.mup) {
        if(this.gsId!=null){
          this.serviceInstance = this.su.subscribers.find((gs)=>gs.id==this.gsId);
        }else if(this.su.subscribers.length!=0){
          this.serviceInstance = this.su.subscribers[0];
        }
        
      } else {
        this.serviceInstance = this.su.subscribers[0];
      }
    });
  }

  changeServiceInstance(e){
    console.log('e:',e.target.value);
    this.serviceInstance = this.su.subscribers.find((si)=>si.id==e.target.value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NumberSelectorComponent, {
      width: '900px',
      height: '400px',
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result:", result);
      this.su.subscribers = this.su.subscribers.map((s) => {
        if (s.id == this.serviceInstance.id) {
          s.value = result;
        }
        return s;
      });
    });
  }
  openMembersNumDialog(): void {
    const dialogRef = this.dialog.open(MembersNumComponent, {
      width: '830px',
      data: {
        num: this.su.subscribers!=null?this.su.subscribers.length:0
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("product:", result);
        this.shoppingCartService.addGroupSubscribers(this.sid,result);
        this.router.navigate(['dashboard/config',{ sid: this.sid }]);
      }     
    });
  }
  confirm() {

    if (this.configType == 'group') {
      this.openMembersNumDialog();
      //this.router.navigate(['dashboard/offerselection']);
    } else {
      this.shoppingCartService.updateSubscriber(this.su);
      this.router.navigate(['dashboard/offerselection']);
    }
  }
  

}

