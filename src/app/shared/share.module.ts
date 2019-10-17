import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ExpansionMenuComponent } from './expansion-menu/expansion-menu.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NumberSelectorComponent } from './number-selector/number-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MembersNumComponent } from './members-num/members-num.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
@NgModule({
  declarations: [BubbleComponent, ProductComponent, ExpansionMenuComponent, ShoppingCartComponent,  AddToCartComponent, NumberSelectorComponent, MembersNumComponent, FilterMenuComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    OverlayPanelModule,
    MatCardModule,
    MultiSelectModule,
    DropdownModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule
  ],
  entryComponents: [ AddToCartComponent, NumberSelectorComponent, MembersNumComponent, ProductComponent ],
  exports:[BubbleComponent, ProductComponent, ExpansionMenuComponent, ShoppingCartComponent, FilterMenuComponent ]
})
export class ShareModule { }
