import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeanBackKneeTuckPageRoutingModule } from './lean-back-knee-tuck-routing.module';

import { LeanBackKneeTuckPage } from './lean-back-knee-tuck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeanBackKneeTuckPageRoutingModule
  ],
  declarations: [LeanBackKneeTuckPage]
})
export class LeanBackKneeTuckPageModule {}
