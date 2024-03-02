import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HipCiclesPage } from './hip-cicles.page';

const routes: Routes = [
  {
    path: '',
    component: HipCiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipCiclesPageRoutingModule {}
