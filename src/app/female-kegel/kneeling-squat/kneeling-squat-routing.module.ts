import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KneelingSquatPage } from './kneeling-squat.page';

const routes: Routes = [
  {
    path: '',
    component: KneelingSquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KneelingSquatPageRoutingModule {}
