import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { SessionComponent } from './components/session/session.component';

const appRoutes: Routes = [
    {path: '', component: SessionComponent},
    {path: 'session', component: SessionComponent},
    {path: 'menu', component: MenuComponent},

    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);