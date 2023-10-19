import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app.config';
import { UtilsFunctions } from './app-utils/functions';
import { AppModule } from './app/app.module';

//start google map library
const mapsApiKey: string = AppConfig.getGMapApiKey();
UtilsFunctions.printGoogleMapMainScript(mapsApiKey);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
