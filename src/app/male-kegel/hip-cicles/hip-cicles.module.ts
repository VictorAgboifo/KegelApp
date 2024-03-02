import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HipCiclesPageRoutingModule } from './hip-cicles-routing.module';

import { HipCiclesPage } from './hip-cicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HipCiclesPageRoutingModule
  ],
  declarations: [HipCiclesPage]
})
export class HipCiclesPageModule {}
