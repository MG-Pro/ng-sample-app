import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core'
import {Task} from '../app.component'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent {
  @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>()

  @ViewChild('counter', {static: false}) counterRef: ElementRef

  id: number = 0
  newTitle: string = ''
  newContent: string = ''


  add() {
    if (!this.newTitle.trim() || !this.newContent.trim()) {
      return
    }
    const task: Task = {
      title: this.newTitle,
      content: this.newContent,
      id: this.id++
    }

    this.newContent = ''
    this.newContent = ''

    this.onAdd.emit(task)
    console.log(this.onAdd)
  }
}
