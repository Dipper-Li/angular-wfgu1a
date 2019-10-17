import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartaComponent } from './parta.component';
import { TestService } from  '../service/test.service';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'t1',component:PartaComponent}])
  ],
  declarations: [PartaComponent],
  exports:[PartaComponent],
  //providers:[TestService]
})
export class PartaModule { }