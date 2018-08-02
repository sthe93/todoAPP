import { Injectable } from "@angular/core";

@Injectable()
export class ToDo{

    todoitems=[];
    progressItems=[];
    completedItens=[];

    addNewToDo(newitem:string){
        this.todoitems.push(newitem)
    }
    getAllToDoItems():any{
        return this.todoitems;
    }
    addToProgress(index:number){
        this.progressItems.push(this.todoitems[index]);
        this.removeTaskTodo(index);
    }
    removeTaskTodo(index:number){
        this.todoitems.splice(index,1);
    }
    removeCompletedTask(index:number){
        this.progressItems.splice(index,1);
    }

    getAllToDoTask():any{
        return this.progressItems;
    }
    addToCompleted(index:number){
        this.completedItens.push(this.progressItems[index]);
        this.removeCompletedTask(index);
    }
    getAllToCompleted():any{
        return this.completedItens;
    }
}