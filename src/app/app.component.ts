import { Component } from '@angular/core';
import { User } from './types/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-mind-frontend';

  department = '';
  charge = ''

  users: User[] = []
}
