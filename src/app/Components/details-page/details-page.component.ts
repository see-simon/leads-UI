import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  standalone: true,
  imports: [NgIf, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent {

  item: any = null;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    const data = history.state;
    if (data && data.title) {
      this.item = data;
    } else {
      this.router.navigate(['/']);
    }
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      data: this.item,
      width: '500px'
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}