import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../../fetch.service';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

// interface Category{
//   subCategory: SubCategory[];
//   categoryTitle:string;
// }

// interface SubCategory{
//   menuItems: MenuItems[];
//   subCategoryTitle:string;
// }

// interface MenuItems{

// }
export class MenuComponent implements OnInit{
  restaurantId!: any;
  menuCards:any;

  constructor(private router: ActivatedRoute, private fetchService: FetchService){}
  ngOnInit(): void {
    this.restaurantId = this.router.snapshot.paramMap.get('restaurantId');
    console.log("Rest id is " , this.restaurantId);
    console.log("Param Map is " , this.router.snapshot.params);


    this.fetchService.fetchMenuData(this.restaurantId)
      .subscribe((menuCards:any)=>{
        this.menuCards = menuCards;

      });
    
  }

}
