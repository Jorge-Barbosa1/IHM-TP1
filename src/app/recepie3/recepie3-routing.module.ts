import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recepie3Page } from './recepie3.page';

const routes: Routes = [
  {
    path: '',
    component: Recepie3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recepie3PageRoutingModule {}
