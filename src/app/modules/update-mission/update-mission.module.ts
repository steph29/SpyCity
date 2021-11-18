import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMissionRoutingModule } from './update-mission-routing.module';
import { UpdateMissionComponent } from 'src/app/component/update-mission/update-mission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateMissionComponent],
  exports: [UpdateMissionComponent],
  imports: [
    CommonModule,
    UpdateMissionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UpdateMissionModule {}
