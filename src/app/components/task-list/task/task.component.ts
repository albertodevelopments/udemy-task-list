import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../../interfaces/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: Task 
  @Input() index: number

  @Output() remove: EventEmitter<number>
  @Output() complete: EventEmitter<number>

  constructor() { 
    this.remove = new EventEmitter<number>()
    this.complete = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  taskCheckedEvent(){
    this.complete.emit(this.index)
  }

  removeEvent(){
    this.remove.emit(this.index)
  }

}
