import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recepie1PageRoutingModule } from './recepie1-routing.module';

import { Recepie1Page } from './recepie1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recepie1PageRoutingModule
  ],
  declarations: [Recepie1Page]
})
export class Recepie1PageModule {}
