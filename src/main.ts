// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(`App Title: ${appConfig.title}`);
