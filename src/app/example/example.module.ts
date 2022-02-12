import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MaterialModule
  ]
})
export class ExampleModule { }
