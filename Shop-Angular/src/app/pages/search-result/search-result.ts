import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../components/product-card/product-card';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Component({
    
  selector: 'app-search-result',
  
  imports: [FormsModule, ProductCard],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
})
export class SearchResult {

    // The search text entered by the user
  searchText = '';
  
//  list of products to be displayed
  products = MOCK_PRODUCTS;

  // getter ==> filters the products based on the search text
  get filterProducts() {

    return this.products.filter(product =>
      product.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );

  }
}