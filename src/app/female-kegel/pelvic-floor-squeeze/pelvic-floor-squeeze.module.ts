import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelvicFloorSqueezePageRoutingModule } from './pelvic-floor-squeeze-routing.module';

import { PelvicFloorSqueezePage } from './pelvic-floor-squeeze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelvicFloorSqueezePageRoutingModule
  ],
  declarations: [PelvicFloorSqueezePage]
})
export class PelvicFloorSqueezePageModule {}
