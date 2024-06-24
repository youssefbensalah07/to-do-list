import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  Title: string = 'To-Do-List';
  imageLink: string = 'https://cdn-icons-png.flaticon.com/512/306/306470.png';

  tasks: string[] = [];
  newTask: string = "";
  isAvalible: boolean = false;

  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks.push(this.newTask);
      console.log(this.newTask);
      this.newTask = "";
      this.isAvalible = true;
    }
    console.log(this.tasks);
  }

  RemoveTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvalible = this.tasks.length > 0;

  }
  /* EditTask(index: number) {
    let updateTask = prompt("Edit Task", this.tasks[index]);
    if (updateTask !== null) {
      this.tasks[index] = updateTask.trim();
    }

  } */

    EditTask(index:number,newTaskEdit:string):string|void
    {
      let trimedTask=newTaskEdit.trim();
      if (trimedTask !== "") {
        this.tasks[index]=trimedTask;
        
      }
      else
      {
        newTaskEdit=this.tasks[index];
        return this.newTask=newTaskEdit;
      }



    }

}
