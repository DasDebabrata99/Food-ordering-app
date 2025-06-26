import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes =[
    {path:"", component: HeaderComponent, children:[
        {path:"", component: BodyComponent},
        {path:"menu/:restaurantId", component: MenuComponent},
        {path:"cart", component: CartComponent}
    ] },
    
]

