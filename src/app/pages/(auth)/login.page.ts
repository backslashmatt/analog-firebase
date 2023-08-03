import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: ` <div>
    <mat-card>
      <mat-card-header>
        <mat-card-title>Login</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form">
            <mat-form-field>
              <input matInput placeholder="Email" formControlName="email" />
            </mat-form-field>
            <mat-form-field>
              <input
                matInput
                placeholder="Password"
                formControlName="password" />
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="login()">
              Login
            </button>
          </form>
        </mat-card-content>
      </mat-card-header>
    </mat-card>
  </div>`,
  styles: [``],
  providers: [FormBuilder, AuthService],
  imports: [
    AsyncPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export default class HomeComponent {
  private _fb = inject(FormBuilder);
  private _auth = inject(AuthService);

  public form = this._fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  public login() {
    this._auth
      .login(this.form.value.email ?? '', this.form.value.password ?? '')
      .subscribe(res => console.log(res));
  }
}
