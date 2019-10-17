import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {  RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path: '', component: TestComponent, children: [
    //{ path: 'basicinfo', component: BasicinfoComponent },
  ] },
  // {
  //   path: 'basicinfo',
  //   component: BasicinfoComponent
  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestRoutingModule { }
