
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AppCommon } from './app.common';
import * as $ from 'jquery';



import { DashboardModule } from './dashboard/dashboard.module';

import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ShareModule } from './shared/share.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    // OfferSelectionComponent,
    // ConfigureComponent,
    // ShoppingCartComponent,
    // ResultBoxComponent,
    // NumberSelectionComponent,
    // MupMembersComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    //SalesOfferModule,

    DashboardModule,
    DashboardRoutingModule,
    ShareModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [AppCommon],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
