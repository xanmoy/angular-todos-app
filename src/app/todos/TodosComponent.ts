import { Component, Inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss']
})
export class Todos implements OnInit {
  todoService = Inject(TodosService);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    // console.log('TodoItem component initialized');
  }
}
