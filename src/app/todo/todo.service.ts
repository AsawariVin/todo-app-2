import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';
import { TODO_LIST } from './todo.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = TODO_LIST;

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, todo: Todo) {
    this.todos[index] = todo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
