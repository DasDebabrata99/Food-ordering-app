import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../model/CartItem';
import { select, Store } from '@ngrx/store';
import { reduceFromCart, addToCart } from '../cart/cart.action';
import { take } from 'rxjs';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent  {


  @Input() menuItem: any;
  quantity=0;
  //inStoreItem!: CartItem; 
  constructor(private store: Store<{ cart: CartItem[] }>){}

  addButton(){
    this.quantity+=1;
    const item: CartItem = {
      id : this.menuItem.card.info.id,
      itemImage : this.menuItem.card.info.imageId,
      itemName : this.menuItem.card.info.name,
      itemPrice :  this.menuItem.card.info.price,
      quantity : 1,
     }      
      this.store.dispatch(addToCart({item}));
  }

  removeButton(){
    this.quantity -= 1;
    this.store.dispatch(reduceFromCart({itemId: this.menuItem.card.info.id }));
  }
}
