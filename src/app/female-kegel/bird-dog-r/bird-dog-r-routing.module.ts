import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdDogRPage } from './bird-dog-r.page';

const routes: Routes = [
  {
    path: '',
    component: BirdDogRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdDogRPageRoutingModule {}
