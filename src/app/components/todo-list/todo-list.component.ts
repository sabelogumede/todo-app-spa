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

  constructor() { }

  ngOnInit(): void {

    // todo object data
    this.todos = [
      {
        content: 'do some work',
        completed: false
      }
    ]
  }

}
