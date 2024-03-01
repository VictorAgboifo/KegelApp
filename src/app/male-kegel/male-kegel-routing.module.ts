import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaleKegelPage } from './male-kegel.page';

const routes: Routes = [
  {
    path: '',
    component: MaleKegelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaleKegelPageRoutingModule {}
