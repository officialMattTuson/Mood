import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../core/modules/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MaterialModule, RouterModule],
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  loginGoogle() {
    this.authService.loginWithGoogle().subscribe({
      next: (res) => {
        console.log('User logged in:', res);
        this.router.navigateByUrl('/chat');
      },
      error: (error) => {
        console.error('Login error:', error);
      },
    });
  }

  register() {
    // this.router.navigateByUrl('/register');
  }
}
