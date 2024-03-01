import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  {
    path: '',
    redirectTo: 'select-level',
    pathMatch: 'full'
  },
  {
    path: 'select-level',
    loadChildren: () => import('./select-level/select-level.module').then( m => m.SelectLevelPageModule)
  },
  {
    path: 'male-kegel',
    loadChildren: () => import('./male-kegel/male-kegel.module').then( m => m.MaleKegelPageModule)
  },
  {
    path: 'female-kegel',
    loadChildren: () => import('./female-kegel/female-kegel.module').then( m => m.FemaleKegelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
