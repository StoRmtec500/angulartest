import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './admin/settings/settings.component';
import { DashboardComponent } from './finanzen/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { FinanzeComponent } from './finanzen/finanze/finanze.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'finanze', component: FinanzeComponent}
    ]
  },
  {
    path: 'admin',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
