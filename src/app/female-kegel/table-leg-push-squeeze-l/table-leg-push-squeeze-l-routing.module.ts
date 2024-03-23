import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableLegPushSqueezeLPage } from './table-leg-push-squeeze-l.page';

const routes: Routes = [
  {
    path: '',
    component: TableLegPushSqueezeLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableLegPushSqueezeLPageRoutingModule {}
