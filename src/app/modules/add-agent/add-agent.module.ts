import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAgentRoutingModule } from './add-agent-routing.module';
import { AddAgentComponent } from 'src/app/component/add-agent/add-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddAgentComponent],
  exports: [AddAgentComponent],
  imports: [
    CommonModule,
    AddAgentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AddAgentModule {}
