import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WorkspaceComponent} from './workspace/workspace.component';

const routes: Routes = [
  { path: '', component: WorkspaceComponent }
];

export const drawRouting: ModuleWithProviders = RouterModule.forChild(routes);
