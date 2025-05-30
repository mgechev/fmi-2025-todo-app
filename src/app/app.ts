import { Component } from '@angular/core';

interface Todo {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  host: {
    'click': 'handleClick()'
  },
  template: `
    <h1>{{ title }}</h1>

    <input #newTodo type="text" placeholder="New todo..." />
    <button (click)="addTodo(newTodo.value); newTodo.value = ''">Add</button>
    <ul>
      @for (todo of todos; track todo) {
      <li [class.completed]="todo.completed">
        <input
          (click)="toggleTodo(todo)"
          [checked]="todo.completed"
          type="checkbox"
        />{{ todo.name }}
        <button (click)="deleteTodo(todo)">Delete</button>
      </li>
      }
    </ul>
  `,
  styleUrl: 'app.css'
})
export class App {
  title = 'Todo management';

  todos: Todo[] = [
    { name: 'Get coffee', completed: true },
    { name: 'Catch 94', completed: false },
  ];

  addTodo(name: string) {
    this.todos.push({
      name,
      completed: false,
    });
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
