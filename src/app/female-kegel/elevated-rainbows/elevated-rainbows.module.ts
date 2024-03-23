import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevatedRainbowsPageRoutingModule } from './elevated-rainbows-routing.module';

import { ElevatedRainbowsPage } from './elevated-rainbows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevatedRainbowsPageRoutingModule
  ],
  declarations: [ElevatedRainbowsPage]
})
export class ElevatedRainbowsPageModule {}
