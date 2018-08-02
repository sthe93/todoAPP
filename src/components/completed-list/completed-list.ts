
import { Component } from '@angular/core';
import { ToDo } from '../../service/todo.service';

/**
 * Generated class for the CompletedListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'completed-list',
  templateUrl: 'completed-list.html'
})
export class CompletedListComponent {

  text: string;
  completedItens=[];

  constructor(private todo:ToDo){
      this.completedItens=this.todo.getAllToCompleted();
  }

}
