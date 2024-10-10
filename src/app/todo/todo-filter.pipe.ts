import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todoList: Todo[], searchText: string): Todo[] {
    if (!searchText) {
      return todoList;
    }

    const term = searchText.toLowerCase();
    return todoList.filter(todo => {
      return (
        todo.assignedTo?.toLowerCase()?.includes(term) ||
        todo.status?.toLowerCase().includes(term) ||
        todo.dueDate?.toLowerCase().includes(term) ||
        todo.priority?.toLowerCase().includes(term) ||
        todo.comment?.toLowerCase().includes(term)
      );
    });
  }
}
