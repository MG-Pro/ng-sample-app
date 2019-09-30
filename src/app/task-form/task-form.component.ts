import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  id:number = 0
  newTitle: string = ''
  newContent: string = ''

  add() {
    if(!this.newTitle.trim() || !this.newContent.trim()) {
      return;
    }

  }
}
