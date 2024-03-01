import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FemaleKegelPage } from './female-kegel.page';

const routes: Routes = [
  {
    path: '',
    component: FemaleKegelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemaleKegelPageRoutingModule {}
