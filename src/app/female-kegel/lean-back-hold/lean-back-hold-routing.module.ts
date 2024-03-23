import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeanBackHoldPage } from './lean-back-hold.page';

const routes: Routes = [
  {
    path: '',
    component: LeanBackHoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeanBackHoldPageRoutingModule {}
