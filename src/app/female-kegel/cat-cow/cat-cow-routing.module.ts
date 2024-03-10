import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatCowPage } from './cat-cow.page';

const routes: Routes = [
  {
    path: '',
    component: CatCowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatCowPageRoutingModule {}
