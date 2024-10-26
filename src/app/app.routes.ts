import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'panel',
    loadComponent: () =>
      import('./panel/panel.component').then((m) => m.PanelComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
