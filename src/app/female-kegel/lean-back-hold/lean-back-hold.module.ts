import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeanBackHoldPageRoutingModule } from './lean-back-hold-routing.module';

import { LeanBackHoldPage } from './lean-back-hold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeanBackHoldPageRoutingModule
  ],
  declarations: [LeanBackHoldPage]
})
export class LeanBackHoldPageModule {}
