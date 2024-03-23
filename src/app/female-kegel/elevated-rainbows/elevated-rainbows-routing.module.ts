import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevatedRainbowsPage } from './elevated-rainbows.page';

const routes: Routes = [
  {
    path: '',
    component: ElevatedRainbowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevatedRainbowsPageRoutingModule {}
