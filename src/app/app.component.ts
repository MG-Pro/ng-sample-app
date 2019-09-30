import {Component} from '@angular/core'

export interface Post {
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

  posts: Post[] = [

  ];



}
