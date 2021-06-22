import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css'],
})
export class ProductBuyComponent implements OnInit {
  productId: string;
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.product = {} as Product;
    this.productId = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (res) => {
      this.productId = res['id'];
      await this.getProductDetails();
    });
  }

  async getProductDetails() {
    try {
      this.product = await this.productService.getProductDetails(
        this.productId
      );
      console.log(this.product)
    } catch (err) {
      console.log(err);
    }
  }
}
