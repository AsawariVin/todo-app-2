import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFilterPipe } from './todo-filter.pipe';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoFilterPipe,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
