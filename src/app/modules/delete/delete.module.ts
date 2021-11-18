import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from 'src/app/component/delete/delete.component';

@NgModule({
  declarations: [DeleteComponent],
  exports: [DeleteComponent],
  imports: [CommonModule, DeleteRoutingModule],
})
export class DeleteModule {}
