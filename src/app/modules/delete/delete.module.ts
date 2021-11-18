import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from 'src/app/component/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeleteComponent],
  exports: [DeleteComponent],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DeleteModule {}
