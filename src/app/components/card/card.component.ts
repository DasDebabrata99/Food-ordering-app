import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FAV_SELECTED_IMG, FAV_UNSELECTED_IMG, IMAGE_URL } from '../../config/constants';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../config/service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{
  @Input() restaurant: any;

  id!: string;
  imageUrl!: string;
  name!:string;
  avgRating!:string;
  sla!:string;
  cuisines!:string;
  favUnselectImage = FAV_UNSELECTED_IMG;
  favSelectImage = FAV_SELECTED_IMG;
  isFavourite=false;
  @Output() setFavourite = new EventEmitter<{id : string, isFavourite: boolean}>();

  constructor(private router: Router, 
    private favRestSubject: RestaurantService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.id = this.restaurant.info.id;
    this.imageUrl = IMAGE_URL+ this.restaurant.info.cloudinaryImageId;
    this.name = this.restaurant.info.name;
    this.avgRating = this.restaurant.info.avgRating;
    this.sla = this.restaurant.info.sla.slaString;
    this.cuisines = this.restaurant.info.cuisines;
    this.isFavourite = this.restaurant.isFavourite;
  }

  onCardClick(){
    this.router.navigate(["menu", this.id])
  }
  onFavClicked(){
    //this.isFavourite=!this.isFavourite;
    this.favRestSubject.restaurantSubject.next(this.name);  
    this.setFavourite.emit({id: this.id, isFavourite: !this.isFavourite});
    console.log("set Favourite event emitted");
    
  }
}
