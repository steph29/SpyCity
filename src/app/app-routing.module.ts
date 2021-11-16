import { ContentChild, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAgentComponent } from './component/add-agent/add-agent.component';
import { AdminComponent } from './component/admin/admin.component';
import { ContactComponent } from './component/contact/contact.component';
import { DeleteComponent } from './component/delete/delete.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateAgentComponent } from './component/update-agent/update-agent.component';
import { UpdateMissionComponent } from './component/update-mission/update-mission.component';
import { RoutesGuardGuard } from './routes-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'addAgent',
    component: AddAgentComponent,
  },
  {
    path: 'updateAgent/:id',
    component: UpdateAgentComponent,
  },
  {
    path: 'updateMission/:id',
    component: UpdateMissionComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
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
