import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelvicFloorSqueezePage } from './pelvic-floor-squeeze.page';

const routes: Routes = [
  {
    path: '',
    component: PelvicFloorSqueezePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelvicFloorSqueezePageRoutingModule {}
