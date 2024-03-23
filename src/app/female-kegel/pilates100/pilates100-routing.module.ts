import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pilates100Page } from './pilates100.page';

const routes: Routes = [
  {
    path: '',
    component: Pilates100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pilates100PageRoutingModule {}
