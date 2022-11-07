import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AgenciesComponent } from "./agencies/agencies.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { TripsComponent } from "./trips/trips.component";

@NgModule({
  declarations: [AppComponent, AgenciesComponent, TripsComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
