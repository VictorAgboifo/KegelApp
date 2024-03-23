import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableLegPushSqueezeRPageRoutingModule } from './table-leg-push-squeeze-r-routing.module';

import { TableLegPushSqueezeRPage } from './table-leg-push-squeeze-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableLegPushSqueezeRPageRoutingModule
  ],
  declarations: [TableLegPushSqueezeRPage]
})
export class TableLegPushSqueezeRPageModule {}
