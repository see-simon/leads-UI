import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {

  form = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  constructor(private http: HttpClient) { }

  submit() {
    this.http.post('http://localhost:8080/api/leads', this.form)
      .subscribe(() => {
        alert('Submitted successfully!');
      });
  }
}
