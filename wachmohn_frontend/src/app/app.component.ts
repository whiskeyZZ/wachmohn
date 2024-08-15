import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import fortune from '../assets/fortunecookie.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wachmohn_frontend';
  cookies: String[] = fortune["fortune"];
  cookie: String = "";


  fortunecookie() {
    this.cookie = this.cookies[Math.floor(Math.random() * this.cookies.length)]
  }

}
