import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pilates100PageRoutingModule } from './pilates100-routing.module';

import { Pilates100Page } from './pilates100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pilates100PageRoutingModule
  ],
  declarations: [Pilates100Page]
})
export class Pilates100PageModule {}
