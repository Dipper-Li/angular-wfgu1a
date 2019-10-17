import { BasicinfoComponent } from './dashboard/basicinfo/basicinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  // { path: 'offerselection', component: OfferSelectionComponent },
  // { path: 'configure', component: ConfigureComponent },
  // { path: 'configure/:itemId', component: ConfigureComponent },
  // { path: 'numberselection', component: NumberSelectionComponent },
  // { path: 'MupMembersComponent', component: MupMembersComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
