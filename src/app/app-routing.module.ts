import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-api',
    loadChildren: () => import('./list-api/list-api.module').then( m => m.ListAPIPageModule)
  },
  {
    path: '',
    redirectTo: 'list-api',
    pathMatch: 'full'
  },
  {
    path: 'manage-data',
    loadChildren: () => import('./manage-data/manage-data.module').then( m => m.ManageDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
