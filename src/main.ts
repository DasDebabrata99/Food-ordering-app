import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';



  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(), // ✅ This registers HttpClient properly in standalone apps
      provideRouter(routes)
    ]
  }).catch(err => console.error(err));