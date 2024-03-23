import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdDogRPageRoutingModule } from './bird-dog-r-routing.module';

import { BirdDogRPage } from './bird-dog-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdDogRPageRoutingModule
  ],
  declarations: [BirdDogRPage]
})
export class BirdDogRPageModule {}
