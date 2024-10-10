import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.interface';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  selectedTodoIndex: any;
  selectedTodo: any;
  createTodoDialog = false;
  deleteTodoDialog = false;
  todoForm: any;
  searchInput = new FormControl();
  dialogTitle = '';

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.createTodoForm();
    this.getTodos();
  }

  createTodoForm() {
    this.todoForm = new FormGroup({
      assignedTo: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      comment: new FormControl('')
    });
  }

  getTodos() {
    this.todos = this.todoService.getTodos();
  }

  createTodo() {
    this.createTodoDialog = true;
    this.dialogTitle = 'New Task';
  }

  saveTodo() {
    if (this.selectedTodo) {
      this.todoService.updateTodo(this.selectedTodoIndex, this.todoForm.getRawValue());
    } else {
      this.todoService.addTodo(this.todoForm.getRawValue());
    }

    this.todoForm.reset();
    this.getTodos();
    this.close();
  }

  editTodo(todo: Todo, index: number) {
    this.dialogTitle = 'Edit Task';
    this.createTodoDialog = true;
    this.selectedTodo = todo;
    this.selectedTodoIndex = index;
    this.todoForm.patchValue(todo);
  }

  deleteTodo(todo: Todo, index: number) {
    this.selectedTodo = todo;
    this.selectedTodoIndex = index;
    this.deleteTodoDialog = true;
  }

  confirmDelete() {
    this.todoService.deleteTodo(this.selectedTodoIndex);
    this.getTodos();
    this.close();
  }

  close() {
    this.createTodoDialog = false;
    this.deleteTodoDialog = false;
    this.selectedTodo = null;
    this.selectedTodoIndex = null;
    this.dialogTitle = '';
  }
}
