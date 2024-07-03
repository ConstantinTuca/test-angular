import { Component, Input } from "@angular/core";
import { DatePipe } from "@angular/common";

import { TaskComponent } from './task/task.component';
import { TaskModalComponent } from "./task-modal/task-modal.component";

import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent, TaskModalComponent, DatePipe ],
  templateUrl: './tasks.component.html',
  styleUrl: 'tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseModal() {
    this.isAddingTask = false;
  }
}