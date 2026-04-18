import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadsService } from '../services/leads.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private leadsService: LeadsService, private dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public stateData: any ,   private router: Router, // ✅ ADD THIS
  ) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      
     description: [`${this.stateData.title}`, Validators.required]
    });
  }


onSubmit() {
  if (this.userForm.valid) {

    this.leadsService.addLeads(this.userForm.value).subscribe(response => {
      console.log('Lead added successfully', response);

      // ✅ Close dialog first
      this.dialogRef.close();
      alert('Thank you! A consultant will contact you shortly.');
      // ✅ Then navigate to landing page
      this.router.navigate(['/landing-page']);

    }, error => {
      console.error('Error adding lead', error);
    });

  }
}
}
