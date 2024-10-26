import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  authenticated(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        // connect to API/ESP32
        this.router.navigate(['/panel']);
      }, 5000);
    }
  }
}
