import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectLevelPageRoutingModule } from './select-level-routing.module';
import { SelectLevelPage } from './select-level.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLevelPageRoutingModule
  ],
  declarations: [SelectLevelPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Move this line inside the @NgModule decorator
})
export class SelectLevelPageModule {}




