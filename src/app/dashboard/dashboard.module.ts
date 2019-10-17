import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/components/steps/steps';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ShareModule } from '../shared/share.module';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { ConfigComponent } from './config/config.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
//import { BasicInfoComponent } from './../sales-offer/basic-info/basic-info.component';
import { OfferselectionComponent } from './offerselection/offerselection.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PhysicalresourcesComponent } from './physicalresources/physicalresources.component';
import { DocumentComponent } from './document/document.component';
import { SummaryComponent } from './summary/summary.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {SnackBarComponentExample} from './snack-bar-component-example';
@NgModule({
  declarations: [DashboardComponent, OfferselectionComponent,BasicinfoComponent, ConfigComponent, PaymentComponent, PhysicalresourcesComponent, DocumentComponent, SummaryComponent, SnackBarComponentExample,
     ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatRadioModule,
    ShareModule,
    MatTabsModule,
    OverlayPanelModule,
    MultiSelectModule,
    CheckboxModule,
    FormsModule,
    StepsModule,
    
    ReactiveFormsModule
  ],
   entryComponents:[SnackBarComponentExample],
  exports:[DashboardComponent]
})
export class DashboardModule { }
