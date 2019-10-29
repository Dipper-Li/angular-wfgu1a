import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ExpansionMenuComponent } from './expansion-menu/expansion-menu.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { NumberSelectorComponent } from './number-selector/number-selector.component';
import { MembersNumComponent } from './members-num/members-num.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { DemoMaterialModule } from '../material-module';
@NgModule({
  declarations: [BubbleComponent, ProductComponent, ExpansionMenuComponent, ShoppingCartComponent,  AddToCartComponent, NumberSelectorComponent, MembersNumComponent, FilterMenuComponent],
  imports: [
    CalendarModule,
    SliderModule,
    CommonModule,
    DemoMaterialModule,
    OverlayPanelModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
  ],
  entryComponents: [ AddToCartComponent, NumberSelectorComponent, MembersNumComponent, ProductComponent ],
  exports:[BubbleComponent, ProductComponent, ExpansionMenuComponent, ShoppingCartComponent, FilterMenuComponent ]
})
export class ShareModule { }
