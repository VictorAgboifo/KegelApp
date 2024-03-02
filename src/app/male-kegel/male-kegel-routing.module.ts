import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaleKegelPage } from './male-kegel.page';

const routes: Routes = [
  {
    path: '',
    component: MaleKegelPage
  },
  {
    path: 'hip-cicles',
    loadChildren: () => import('./hip-cicles/hip-cicles.module').then( m => m.HipCiclesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaleKegelPageRoutingModule {}
