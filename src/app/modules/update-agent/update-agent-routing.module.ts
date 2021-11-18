import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAgentComponent } from 'src/app/component/update-agent/update-agent.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateAgentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAgentRoutingModule {}
