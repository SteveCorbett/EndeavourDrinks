import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';

import { ICustomer, Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-glyph',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './customer-glyph.component.html',
  styleUrls: ['./customer-glyph.component.css']
})
export class CustomerGlyphComponent implements OnInit, OnDestroy {
  protected initials: string = '';
  protected customer: ICustomer = new Customer();
  #subs: Subscription = new Subscription();

  // ToDo: Enable logging out, using drop down menu on click?
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.#subs.add(
      this.customerService.customer$.subscribe((customer) => {
        this.customer = customer;
        if (customer.customerId === 0){ this.initials = ""}
        else {
          const names = customer.fullName.split(' ');
          this.initials = names.reduce((result, name) => result + name.charAt(0), '');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.#subs.unsubscribe();
  }
}
