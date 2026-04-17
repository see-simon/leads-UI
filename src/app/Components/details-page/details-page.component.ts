import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  item: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // You can later fetch from backend
    this.item = {
      id,
      title: 'Ad ' + id,
      image: 'assets/' + id + '.jpg'
    };
  }

  openDialog(){
    this.dialog.open( DialogExampleComponent);
  }

  goToForm() {
    this.router.navigate(['/form-page']);
  }
}
