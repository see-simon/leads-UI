import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {

  items = [
    {
      id: 1,
      title: '50 Mbps Home Fibre',
      speed: '50 Mbps',
      price: 'R399/month',
      description: 'Perfect for light browsing, streaming and working from home.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=50+Mbps',
      features: ['Uncapped data', 'Free installation', '24/7 support']
    },
    {
      id: 2,
      title: '100 Mbps Home Fibre',
      speed: '100 Mbps',
      price: 'R599/month',
      description: 'Ideal for families with multiple devices and HD streaming.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=100+Mbps',
      features: ['Uncapped data', 'Free router', '24/7 support']
    },
    {
      id: 3,
      title: '200 Mbps Home Fibre',
      speed: '200 Mbps',
      price: 'R799/month',
      description: 'Great for heavy streaming, gaming and large file downloads.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=200+Mbps',
      features: ['Uncapped data', 'Free router', 'Priority support']
    },
    {
      id: 4,
      title: '500 Mbps Business Fibre',
      speed: '500 Mbps',
      price: 'R1,299/month',
      description: 'Built for small businesses needing reliable high speed connectivity.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=500+Mbps',
      features: ['Uncapped data', 'Static IP', 'Business SLA']
    },
    {
      id: 5,
      title: '1 Gbps Business Fibre',
      speed: '1 Gbps',
      price: 'R1,999/month',
      description: 'Maximum speed for large teams, cloud services and video conferencing.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=1+Gbps',
      features: ['Uncapped data', 'Static IP', 'Dedicated account manager']
    },
    {
      id: 6,
      title: 'LTE Backup Solution',
      speed: 'Up to 50 Mbps',
      price: 'R299/month',
      description: 'Stay connected with our LTE backup when fibre is unavailable.',
      image: 'https://placehold.co/400x180/0a0a2e/00d4ff?text=LTE+Backup',
      features: ['20GB data', 'Plug and play', 'No contract']
    }
  ];

  constructor(private router: Router) {}

  goToDetails(item: any) {
    this.router.navigate(['/details-page'], { state: item });
  }
}