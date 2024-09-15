import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(500)
      ]),
    ])
  ]
})
export class AppComponent  implements OnInit{
  title =  'mi-portafolio';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
    });
  }

  updateTitle() {
    const currentUrl = this.router.url;
    const titleMap: { [key: string]: string } = {
      '/': 'Home',
      '/projects': 'Projects',
      '/skills': 'Skills',
      '/certifications': 'Certifications',
      '/about': 'About'
    };
    this.title = titleMap[currentUrl] || 'Home';
  }
  
}
