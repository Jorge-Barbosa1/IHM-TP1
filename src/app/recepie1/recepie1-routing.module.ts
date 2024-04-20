import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recepie1Page } from './recepie1.page';

const routes: Routes = [
  {
    path: '',
    component: Recepie1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recepie1PageRoutingModule {}
