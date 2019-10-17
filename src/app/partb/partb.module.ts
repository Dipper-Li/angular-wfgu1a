import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartbComponent } from './partb.component';
import { TestService } from  '../service/test.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartbComponent],
  exports:[PartbComponent],
  //providers:[TestService]
})
export class PartbModule { }