import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      icon: '/assets/icons/html.png', 
      description: 'Advanced knowledge in HTML, capable of building semantic, well-structured web pages.',
      level: 90
    },
    {
      name: 'MySQL',
      icon: '/assets/icons/mysql.png',
      description: 'Experienced in MySQL for designing and managing relational databases and ensuring data integrity.',
      level: 80
    },
    {
      name: 'CSS',
      icon: '/assets/icons/css.png', 
      description: 'Average knowledge in CSS for responsive layouts and animations.',
      level: 70
    },
    {
      name: 'JavaScript',
      icon: '/assets/icons/js.png', 
      description: 'Proficient in JavaScript for building interactive web applications.',
      level: 80
    },
    {
      name: 'Python',
      icon: '/assets/icons/python.png', 
      description: 'Knowledge oriented to data science and machine learning.',
      level: 70
    },
    {
      name: 'English',
      icon: '/assets/icons/english.png', 
      description: 'Fluent in English, capable of working in international environments.',
      level: 80
    }
  ];
}
