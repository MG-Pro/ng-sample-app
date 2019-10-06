import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from "./post/post.component";
import {FormsModule} from "@angular/forms";
import { TaskFormComponent } from './task-form/task-form.component';
import { StyleDirective } from './directives/style.directive';
import { NotIfDirective } from './directives/not-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TaskFormComponent,
    StyleDirective,
    NotIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
