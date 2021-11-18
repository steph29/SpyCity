import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAgentRoutingModule } from './update-agent-routing.module';
import { UpdateAgentComponent } from 'src/app/component/update-agent/update-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateAgentComponent],
  exports: [UpdateAgentComponent],
  imports: [
    CommonModule,
    UpdateAgentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UpdateAgentModule {}
