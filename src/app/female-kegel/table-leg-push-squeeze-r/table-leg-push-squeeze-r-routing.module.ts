import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableLegPushSqueezeRPage } from './table-leg-push-squeeze-r.page';

const routes: Routes = [
  {
    path: '',
    component: TableLegPushSqueezeRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableLegPushSqueezeRPageRoutingModule {}
