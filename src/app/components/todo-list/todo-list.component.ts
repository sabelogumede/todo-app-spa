import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.inputTodo = "";

    this.todos = [
      {
        content: 'What needs to be done?',
        completed: false
      }
    ]

  }


  addTodo(): void {
    if (this.inputTodo.trim().length == 0) {
      return;
    }

    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

  deleteTodoitem(id: number): void {
    this.todos = this.todos.filter((value, i) => i !== id)
  }

  toggleCheckbox(id: number): void {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;

      return value;
    })
  }

  itemsLefttodo(): number {
    return this.todos.filter(todo => !todo.completed).length
  }

}
