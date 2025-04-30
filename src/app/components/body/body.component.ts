import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FetchService } from '../../fetch.service';
import { RESTAURANT_API_URL } from '../../config/constants';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

  constructor(private fetchService: FetchService){  }
  searchText!: string;
  restaurants!: any[];
  filteredRestaurants!: any[];
  ngOnInit(): void {
    console.log("inside oninit  making api call");
    this.fetchRestaurantData();   
  }

  onSearch(){
    console.log(this.searchText);
    this.filteredRestaurants = this.restaurants.filter(restaurant => {
      return restaurant?.info.name.includes(this.searchText);
      
    })
  }

  fetchRestaurantData(){
    this.fetchService.fetchRestaurantData()
    .subscribe(data=>{     
      console.log("reading data") ;
      console.log(data);
      this.restaurants = data;
      this.filteredRestaurants = data;
      });
    }
}