import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdDogLPageRoutingModule } from './bird-dog-l-routing.module';

import { BirdDogLPage } from './bird-dog-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdDogLPageRoutingModule
  ],
  declarations: [BirdDogLPage]
})
export class BirdDogLPageModule {}
