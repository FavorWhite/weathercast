import { Routes } from '@angular/router'
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HourlyComponent } from 'app/hourly/hourly.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hourly', component: HourlyComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
