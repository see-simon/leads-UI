import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadsService } from '../services/leads.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private leadsService: LeadsService) {
    // Define your fields here
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      // Add default description
      description: ['Interested in your services', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
      this.leadsService.addLeads(this.userForm.value).subscribe(response => {
        console.log('Lead added successfully', response);
      }, error => {
        console.error('Error adding lead', error);
      });
      // Send this.userForm.value to your PostgreSQL backend via a service
    }
  }
}
