import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducts()
  }

  async getProducts(){
    try{
    const response = await this.productService.getProducts();
    this.products = response.docs;
    console.log(this.products)
    }catch(err){}
  }

}
