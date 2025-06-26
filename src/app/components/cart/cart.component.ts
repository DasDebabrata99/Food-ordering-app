import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartItem } from '../../model/CartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {


  cartItems: CartItem[]=[];

  constructor(  private store: Store<{ cart: CartItem[] }>){}
  
  ngOnInit(): void {
     this.store.select('cart').subscribe(cartItems => {
          this.cartItems = cartItems;
          console.log('Cart Items:', cartItems);
        });
  }


  
}
