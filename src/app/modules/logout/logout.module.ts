import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from 'src/app/component/logout/logout.component';

@NgModule({
  declarations: [LogoutComponent],
  exports: [LogoutComponent],
  imports: [CommonModule, LogoutRoutingModule],
})
export class LogoutModule {}
