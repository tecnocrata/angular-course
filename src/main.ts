// the code that instructs Angular to bootstrap our module.
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
// we ask Angular to bootstrap our module.
platformBrowserDynamic().bootstrapModule(AppModule);
