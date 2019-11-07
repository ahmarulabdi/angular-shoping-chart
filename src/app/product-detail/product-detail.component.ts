import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private chartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => this.product = products[+params.get('id')])
  }

  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.chartService.addToCart(product);
  }

}