import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMAGE_URL } from '../../config/constants';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{
  @Input() restaurant: any;

  imageUrl!: string;
  name!:string;
  avgRating!:string;
  sla!:string;
  cuisines!:string;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.imageUrl = IMAGE_URL+ this.restaurant.info.cloudinaryImageId;
    this.name = this.restaurant.info.name;
    this.avgRating = this.restaurant.info.avgRating;
    this.sla = this.restaurant.info.sla.slaString;
    this.cuisines = this.restaurant.info.cuisines;
  }

  // name
  // avgRating
  // sla.slaString
  // slaString
}
