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
  // console.log("Received data in details page title:", data.title);


  // Check if data and file property exist to avoid 'assets/files/undefined'
  if (data && data.file) {
    this.fileUrl = 'assets/files/' + data.file;
    // console.log("Loading file:", this.fileUrl);
    // console.log("file name is : ", data.file);

    this.fileName = data.file; // Store the file name for display
  } else {
    console.error("No file data found in history.state");
    // Optional: Redirect back to landing if no data is present
    // this.router.navigate(['/landing-page']);
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
