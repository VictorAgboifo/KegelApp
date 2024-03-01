import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FemaleKegelPageRoutingModule } from './female-kegel-routing.module';

import { FemaleKegelPage } from './female-kegel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FemaleKegelPageRoutingModule
  ],
  declarations: [FemaleKegelPage]
})
export class FemaleKegelPageModule {}
