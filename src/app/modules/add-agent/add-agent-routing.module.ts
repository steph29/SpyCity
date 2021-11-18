import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAgentComponent } from 'src/app/component/add-agent/add-agent.component';

const routes: Routes = [
  {
    path: '',
    component: AddAgentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAgentRoutingModule {}
