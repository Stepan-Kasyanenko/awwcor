import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/draw/draw.module#DrawModule',
  },
  { path: '**', redirectTo: '/' },
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
