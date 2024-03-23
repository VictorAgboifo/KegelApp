import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableLegPushSqueezeLPageRoutingModule } from './table-leg-push-squeeze-l-routing.module';

import { TableLegPushSqueezeLPage } from './table-leg-push-squeeze-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableLegPushSqueezeLPageRoutingModule
  ],
  declarations: [TableLegPushSqueezeLPage]
})
export class TableLegPushSqueezeLPageModule {}
