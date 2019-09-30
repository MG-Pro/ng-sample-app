import {Component} from '@angular/core'

export interface Task {
  title: string,
  content: string,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo App'

  tasks: Task[] = [

  ];

  updateTasks(task: Task) {
    this.tasks.unshift(task)
  }

}
