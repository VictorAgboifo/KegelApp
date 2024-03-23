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
  },
 
  {
    path: 'bird-dog-r',
    loadChildren: () => import('./bird-dog-r/bird-dog-r.module').then( m => m.BirdDogRPageModule)
  },
  {
    path: 'bird-dog-l',
    loadChildren: () => import('./bird-dog-l/bird-dog-l.module').then( m => m.BirdDogLPageModule)
  },
  {
    path: 'pelvic-floor-squeeze',
    loadChildren: () => import('./pelvic-floor-squeeze/pelvic-floor-squeeze.module').then( m => m.PelvicFloorSqueezePageModule)
  },
  {
    path: 'kneeling-squat',
    loadChildren: () => import('./kneeling-squat/kneeling-squat.module').then( m => m.KneelingSquatPageModule)
  },
  {
    path: 'table-leg-push-squeeze-r',
    loadChildren: () => import('./table-leg-push-squeeze-r/table-leg-push-squeeze-r.module').then( m => m.TableLegPushSqueezeRPageModule)
  },
  {
    path: 'table-leg-push-squeeze-l',
    loadChildren: () => import('./table-leg-push-squeeze-l/table-leg-push-squeeze-l.module').then( m => m.TableLegPushSqueezeLPageModule)
  },
  {
    path: 'lean-back-knee-tuck',
    loadChildren: () => import('./lean-back-knee-tuck/lean-back-knee-tuck.module').then( m => m.LeanBackKneeTuckPageModule)
  },
  {
    path: 'lean-back-hold',
    loadChildren: () => import('./lean-back-hold/lean-back-hold.module').then( m => m.LeanBackHoldPageModule)
  },
  {
    path: 'elevated-rainbows',
    loadChildren: () => import('./elevated-rainbows/elevated-rainbows.module').then( m => m.ElevatedRainbowsPageModule)
  },
  {
    path: 'pilates100',
    loadChildren: () => import('./pilates100/pilates100.module').then( m => m.Pilates100PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemaleKegelPageRoutingModule {}
