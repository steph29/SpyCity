import { ContentChild, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { RoutesGuardGuard } from './routes-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./modules/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'addAgent',
    loadChildren: () =>
      import('./modules/add-agent/add-agent.module').then(
        (m) => m.AddAgentModule
      ),
  },
  {
    path: 'updateAgent/:id',
    loadChildren: () =>
      import('./modules/update-agent/update-agent.module').then(
        (m) => m.UpdateAgentModule
      ),
  },
  {
    path: 'updateMission/:id',
    loadChildren: () =>
      import('./modules/update-mission/update-mission.module').then(
        (m) => m.UpdateMissionModule
      ),
  },
  {
    path: 'delete/:id',
    loadChildren: () =>
      import('./modules/delete/delete.module').then((m) => m.DeleteModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [RoutesGuardGuard],
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
