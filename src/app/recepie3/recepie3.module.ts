import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recepie3PageRoutingModule } from './recepie3-routing.module';

import { Recepie3Page } from './recepie3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recepie3PageRoutingModule
  ],
  declarations: [Recepie3Page]
})
export class Recepie3PageModule {}
