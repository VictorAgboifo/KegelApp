import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FemaleKegelPage } from './female-kegel.page';

const routes: Routes = [
  {
    path: '',
    component: FemaleKegelPage
  },
  {
    path: 'cat-cow',
    loadChildren: () => import('./cat-cow/cat-cow.module').then( m => m.CatCowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemaleKegelPageRoutingModule {}
