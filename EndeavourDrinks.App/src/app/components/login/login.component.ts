import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  protected canClick: boolean = true;

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  login(): void {
    this.canClick = false;
    this.customerService.customer$.pipe(take(2)).subscribe(() => {
      this.router.navigate(['/products']);
    });
    this.customerService.getCustomer(1);
  }
}
