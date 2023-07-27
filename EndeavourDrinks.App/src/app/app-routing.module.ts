import { Injectable, NgModule } from '@angular/core';
import {
  CanActivate,
  ResolveData,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { The404Component } from './components/the404/the404.component';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Injectable({ providedIn: 'root' })
export class LoadProducts implements ResolveData {
  constructor(private productService: ProductService) {}
  resolve(): void {
    this.productService.getProducts();
  }
}

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}
  canActivate() {
    if (!this.customerService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return this.customerService.isLoggedIn;
  }
}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { products: LoadProducts },
    canActivate: [LoggedInGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: The404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
