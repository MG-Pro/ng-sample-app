import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test App';

  inputData = ''

  onInput(e: KeyboardEvent) {
    this.inputData = (<HTMLInputElement>e.target).value
  }
}
