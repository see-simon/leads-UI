import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  items = [
    { id: 1, title: 'Estate Planning', file: 'Estate-Planning.pdf', image: 'assets/images/estateplanning.jpg' },
    { id: 2, title: 'Financial-Planning_Digital', file: 'Financial-Planning_Digital.pdf', image: 'assets/images/Financial-Planning_Digital.jpg' },
    { id: 3, title: 'Sanlam-Cashback-benefit', file: 'Sanlam-Cashback-benefit-1080x1080.pdf', image: 'assets/images/Cashback-benefit.jpg' },
    { id: 4, title: 'Sanlam-Gap-Cover_Eng', file: 'Sanlam-Gap-Cover_Eng.pdf', image: 'assets/images/sanlam-gap-cover.jpg' },
    { id: 5, title: 'Sanlam-s-Enhanced-Income-Protector', file: 'Sanlam-s-Enhanced-Income-Protector.pdf', image: 'assets/images/sanlam-enhanced-income-protector.jpg' },
    { id: 6, title: 'Sanlam-s-Life-Cover', file: 'Sanlam-s-Life-Cover-1080x1080.pdf', image: 'assets/images/sanlam-life-cover.jpg' },

  ];

  constructor(private router: Router) { }

  goToDetails(item: any) {
    this.router.navigate(['/details-page'], { state: item });
  }
}
