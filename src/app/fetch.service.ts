import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MENU_API_URL, RESTAURANT_API_URL } from './config/constants';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {


  constructor(private http: HttpClient) { }

  fetchRestaurantData(){
    //console.log("inside fetch api");
    return this.http.get(RESTAURANT_API_URL)
      .pipe(
        map((data:any)  =>{
            return data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        }
      ));
  }

  fetchMenuData(restaurantId: string){
    let menuApiUrl = MENU_API_URL.replace("{restaurant_id}", restaurantId);
    return this.http.get(menuApiUrl)
      .pipe(
        map((data:any)=>{
          return data.data.cards;            
        }),
      )
  }
}
