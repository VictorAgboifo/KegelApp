import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  {
    path: '',
    redirectTo: 'landing',
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
  
 
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
