import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recepie2Page } from './recepie2.page';

const routes: Routes = [
  {
    path: '',
    component: Recepie2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recepie2PageRoutingModule {}
