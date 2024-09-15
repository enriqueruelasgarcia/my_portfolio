import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  imports: [CommonModule]
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'August 2024',
      link: 'https://www.freecodecamp.org/certification/ruelin/responsive-web-design',
      icon: '/assets/icons/freecodecamp.png' 
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: 'August 2024',
      link: 'https://www.freecodecamp.org/certification/ruelin/javascript-algorithms-and-data-structures-v8',
      icon: '/assets/icons/freecodecamp.png' 
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: 'August 2024',
      link: 'https://www.freecodecamp.org/certification/ruelin/javascript-algorithms-and-data-structures',
      icon: '/assets/icons/freecodecamp.png' 
    },
    {
      title: 'Back End Development APIs',
      issuer: 'FreeCodeCamp',
      date: 'September 2024',
      link: 'https://www.freecodecamp.org/certification/ruelin/back-end-development-and-apis',
      icon: '/assets/icons/freecodecamp.png' 
    },
    {
      title: 'Cibersecurity Essentials',
      issuer: 'NetAcad',
      date: 'November 2022',
      link: 'https://www.credly.com/badges/a529922d-2b49-47e3-be55-1e3c6ee19799',
      icon: '/assets/icons/netacad.png' 
    }
  ];
}
