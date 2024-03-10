import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatCowPageRoutingModule } from './cat-cow-routing.module';

import { CatCowPage } from './cat-cow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatCowPageRoutingModule
  ],
  declarations: [CatCowPage]
})
export class CatCowPageModule {}
