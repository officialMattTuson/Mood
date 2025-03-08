import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => {
      return initializeApp(environment.firebase);
    }),
    provideAuth(() => {
      return getAuth();
    }),
    provideRouter(routes),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
