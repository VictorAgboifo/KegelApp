import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeanBackKneeTuckPage } from './lean-back-knee-tuck.page';

const routes: Routes = [
  {
    path: '',
    component: LeanBackKneeTuckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeanBackKneeTuckPageRoutingModule {}
