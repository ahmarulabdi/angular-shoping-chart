import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    

    this.checkoutForm = this.formBuilder.group({
      'name' : '',
      'address' : ''
    })
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    console.log(customerData);
    this.cartService.clearCart();
    this.getItem();
    this.checkoutForm.reset();
  }

}