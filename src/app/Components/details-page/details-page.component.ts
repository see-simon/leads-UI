import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  fileUrl: string = '';
  fileName: string = '';

ngOnInit() {
  const data = history.state;

  if (data && data.file) {
    this.fileUrl = 'assets/files/' + data.file;
    this.fileName = data.title; 
  } else {
    console.error("No file data found in history.state");
  }
}

  openDialog() {
    const data = history.state;
    console.log("Opening dialog with data:", data.title);
    this.dialog.open(DialogExampleComponent, {
      data: data
    });
  }

  goToForm() {
    this.router.navigate(['/dialog-example']);
  }
}
