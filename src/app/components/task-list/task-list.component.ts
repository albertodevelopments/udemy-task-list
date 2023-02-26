import { Component, OnInit } from '@angular/core';
import {Task} from '../../interfaces/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskListNotCompleted: any[]
  public taskListCompleted: any[]
  public showInputTask: boolean
  public errorInput: boolean
  public showCompleted: boolean

  constructor() {
    this.taskListCompleted = []
    this.taskListNotCompleted = []
    this.showInputTask = false
    this.errorInput = false
    this.showCompleted = true
   }

  ngOnInit(): void {
  }

  showInputTextTask(): void{
    this.showInputTask = true
  }

  addTask(description: string): void {

    if(description){

      const task: Task = {
        'date': new Date(),
        'description': description,
        'completed': false
      }
      
      this.taskListNotCompleted.push(task)
      this.errorInput = false
      this.showInputTask = false
    }else{
      this.errorInput = true
    }
  }

  completeTask($event: number): void{
    const task = this.taskListNotCompleted[$event]
    task.completed = true
    task.date = new Date()
    this.taskListNotCompleted.splice($event, 1)
    this.taskListCompleted.push(task)
  }

  removeTask($event: number): void{
    this.taskListNotCompleted.splice($event, 1)

  }

  showCompletedTasks(){
    this.showCompleted = !this.showCompleted
  }

}
