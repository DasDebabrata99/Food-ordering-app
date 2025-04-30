import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes =[
    {path:"", component: HeaderComponent, children:[
        {path:"", component: BodyComponent},
    ] },
    
]

