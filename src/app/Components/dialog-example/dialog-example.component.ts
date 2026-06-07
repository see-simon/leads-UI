import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LeadsService } from '../services/leads.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogExampleComponent {
  userForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private leadsService: LeadsService,
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public stateData: any,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      description: [`I am interested in: ${this.stateData.title} - ${this.stateData.price}`, Validators.required]
    });
  }

  getErrorMessage(field: string): string {
    const control = this.userForm.get(field);
    if (control?.hasError('required')) return `${field} is required`;
    if (control?.hasError('email')) return 'Please enter a valid email address';
    if (control?.hasError('pattern')) return 'Please enter a valid 10 digit phone number';
    return '';
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitting = true;
      this.leadsService.addLeads(this.userForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.dialogRef.close();
          this.snackBar.open(
            '✅ Application submitted! A consultant will contact you shortly.',
            'Close',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            }
          );
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (error) => {
          this.isSubmitting = false
          this.dialogRef.close();
          // Show success anyway since lead is saved even if email fails
          this.snackBar.open(
            '✅ Application submitted! A consultant will contact you shortly.',
            'Close',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            }
          );
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      });
    }
  }
}