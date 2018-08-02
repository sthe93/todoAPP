import { ToDo } from './../../service/todo.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private todo:ToDo) {

  }
  newItem:string;
  todoItems=[];
  progressItems=[];

  addNewTodoItems():void{
    if(this.newItem!==''){
      this.todo.addNewToDo(this.newItem)
      this.newItem='';
      this.getAllToDoitems();
    }
  }
  addTogoProgress(index:number){
     this.todo.addToProgress(index);
  }

  getAllToDoitems(){
     this.todoItems=this.todo.getAllToDoItems();
  }
}
