import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Initialize variable
  todos: Todo[] = [];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {

    // todo object data
    this.todos = [
      {
        content: 'What needs to be done?',
        completed: false
      }
    ]

  }

  // methods
  addTodo(): void {
    // check if input area empty
    if (this.inputTodo.trim().length == 0) {
      return;
    }

    // add input item to list
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    // clear the input field after adding item to list
    this.inputTodo = "";
  }

  // delete todo item
  deleteTodoitem(id: number): void {
    this.todos = this.todos.filter((value, i) => i !== id)
  }

  // toggle checkbox
  toggleCheckbox(id: number): void {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;

      return value;
    })
  }

  // list item count
  itemsLefttodo(): number {
    return this.todos.filter(todo => !todo.completed).length
  }

}
