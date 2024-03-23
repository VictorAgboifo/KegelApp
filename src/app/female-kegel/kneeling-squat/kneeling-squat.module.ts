import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KneelingSquatPageRoutingModule } from './kneeling-squat-routing.module';

import { KneelingSquatPage } from './kneeling-squat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KneelingSquatPageRoutingModule
  ],
  declarations: [KneelingSquatPage]
})
export class KneelingSquatPageModule {}
