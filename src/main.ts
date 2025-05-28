import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { cartReducer } from './app/components/cart/cart.reducer';



  bootstrapApplication(AppComponent, {
    providers: [
    provideHttpClient(), // ✅ This registers HttpClient properly in standalone apps
    provideRouter(routes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore({cart: cartReducer}),
  
]
  }).catch(err => console.error(err));