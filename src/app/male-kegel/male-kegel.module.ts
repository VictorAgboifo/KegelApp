import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaleKegelPageRoutingModule } from './male-kegel-routing.module';

import { MaleKegelPage } from './male-kegel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaleKegelPageRoutingModule
  ],
  declarations: [MaleKegelPage]
})
export class MaleKegelPageModule {}
