import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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
  
  @ViewChild('jellyfish') jellyfish!: ElementRef;
  
  constructor(private renderer: Renderer2) {}


  fortunecookie() {
    this.cookie = this.cookies[Math.floor(Math.random() * this.cookies.length)]
  }

  swim() {
    const jellyfishElement = this.jellyfish.nativeElement;

    // Klasse 'animate' hinzufügen
    this.renderer.addClass(jellyfishElement, 'animate');

    setTimeout(() => {
      this.renderer.removeClass(jellyfishElement, 'animate');
    }, 2000); // Dauer der Animation

  }

}
