import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'persona-humana', pathMatch: 'full' },

  {
    path: 'persona-humana',
    loadComponent: () => import('./pages/persona-humana/persona-humana.component').then(c => c.PersonaHumanaComponent),
  },
  {
    path: 'persona-juridica',
    loadComponent: () => import('./pages/persona-juridica/persona-juridica.component').then(c => c.PersonaJuridicaComponent),
  },
  {
    path: 'organismos-publicos',
    loadComponent: () => import('./pages/organismos-publicos/organismos-publicos.component').then(c => c.OrganismosPublicosComponent),
  },

  { path: '**', redirectTo: 'persona-humana', pathMatch: 'full' },
];
