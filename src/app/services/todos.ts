import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      userId: 1,
      id: 0,
      title: 'First Todo',
      completed: false
    },
    {
      userId: 1,
      id: 1,
      title: 'Second Todo',
      completed: false
    }
  ];

  constructor() {
    console.log('TodosService initialized');
  }
}
