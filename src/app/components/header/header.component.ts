import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LOGO_IMAGE_URL } from '../../config/constants';
import { RestaurantService } from '../../config/service';
import { select, Store } from '@ngrx/store';
import { CartItem } from '../../model/CartItem';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [RestaurantService]
})
export class HeaderComponent implements OnInit{
  favouriteRestaurant="";
  
  constructor(private favRestSubject: RestaurantService, 
                private store: Store<{ cart: CartItem[] }>){}

  ngOnInit(): void {
    this.favRestSubject.restaurantSubject.subscribe(data=>{
      this.favouriteRestaurant = data;
    });

    this.store.pipe(select('cart')).subscribe(cartItems => {
      console.log('Cart Items:', cartItems);
    });
  }
  logo_image = LOGO_IMAGE_URL;
  
  
}
