import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog-component',
  standalone: false,
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
