import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'presentation/:id',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'recepies/:id',
    loadChildren: () => import('./recepies/recepies.module').then( m => m.RecepiesPageModule)
  },
  {
    path: 'curiosities/:id',
    loadChildren: () => import('./curiosities/curiosities.module').then( m => m.CuriositiesPageModule)
  },
  {
    path: 'recepie1/:id',
    loadChildren: () => import('./recepie1/recepie1.module').then( m => m.Recepie1PageModule)
  },
  {
    path: 'recepie2/:id',
    loadChildren: () => import('./recepie2/recepie2.module').then( m => m.Recepie2PageModule)
  },
  {
    path: 'recepie3/:id',
    loadChildren: () => import('./recepie3/recepie3.module').then( m => m.Recepie3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
