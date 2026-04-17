import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  items = [
  { id: 1, title: 'Ad 1', image: 'assets/1.jpg' },
  { id: 2, title: 'Ad 2', image: 'assets/2.jpg' },
  { id: 3, title: 'Ad 3', image: 'assets/3.jpg' },
  { id: 4, title: 'Ad 4', image: 'assets/4.jpg' },
  { id: 5, title: 'Ad 5', image: 'assets/5.jpg' },
  { id: 6, title: 'Ad 6', image: 'assets/6.jpg' },
  { id: 7, title: 'Ad 7', image: 'assets/7.jpg' },
  { id: 8, title: 'Ad 8', image: 'assets/8.jpg' }
];

constructor(private router: Router) {}

goToDetails(item: any) {
  this.router.navigate(['/details-page', item.id]);
}
}
