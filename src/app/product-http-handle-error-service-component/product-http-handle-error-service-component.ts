import { Component, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  templateUrl: './product-http-handle-error-service-component.html',
  styleUrl: './product-http-handle-error-service-component.css',
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  errMessage = signal('');

  constructor(private _service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (err: HttpErrorResponse) => {
        // Gọi hàm handleError trực tiếp tại đây
        this.handleError(err);
      },
    });
  }

  handleError(error: HttpErrorResponse): void {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // 1. Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // 2. Server-side error
      errorMessage = `
        Error Status: ${error.status}
        Status Text: ${error.statusText}
        URL: ${error.url}
        Server Details: ${error.error ? JSON.stringify(error.error) : 'No details available'}
      `;
    }

    console.error(errorMessage);
    // Cập nhật chuỗi lỗi vào Signal để hiển thị ra HTML
    this.errMessage.set(errorMessage);
  }
}