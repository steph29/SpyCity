import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateMissionComponent } from 'src/app/component/update-mission/update-mission.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateMissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMissionRoutingModule {}
