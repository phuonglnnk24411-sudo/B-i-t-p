import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-group-customer',
  standalone: false,
  styleUrl: './group-customer.css',
  templateUrl: './group-customer.html',
})
export class GroupCustomer implements OnInit {
  customerGroups: any[] = [];

  constructor(private customerService: Customer) {}

  ngOnInit(): void {

    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => {
        console.error('Lỗi đọc file JSON:', err);
      }
    });
  }
}