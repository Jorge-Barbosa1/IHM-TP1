import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recepie2PageRoutingModule } from './recepie2-routing.module';

import { Recepie2Page } from './recepie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recepie2PageRoutingModule
  ],
  declarations: [Recepie2Page]
})
export class Recepie2PageModule {}
