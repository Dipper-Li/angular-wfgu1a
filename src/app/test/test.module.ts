import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import {  RouterModule, Routes} from '@angular/router';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

// const routes: Routes = [
// 	// {
//   //   path: '', component: TestComponent,
// 	// 	children: [
// 	// 		{ path: '', redirectTo: 'step1', pathMatch: 'full'},
// 	// 		{
// 	// 			path: 'step1',
// 	// 			pathMatch: 'full',
// 	// 			component: Step1Component
//   //     },
//   //   ]
//   // }
//   {
//     path: 'step1',
//     component: TestComponent
//   },
//   // {
//   //   path: 'basicinfo',
//   //   component: BasicInfoComponent
//   // }

// ]

@NgModule({
  declarations: [Step1Component, TestComponent],
  imports: [
    TestRoutingModule,
    FormsModule
  ],
  exports:[TestComponent]
})
export class TestModule { }
