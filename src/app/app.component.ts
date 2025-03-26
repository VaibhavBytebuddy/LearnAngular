import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectiveDirComponentComponent } from './directive/directive-dir-component/directive-dir-component.component';

@Component({
  selector: 'app-root',
  imports: [DirectiveDirComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
}
